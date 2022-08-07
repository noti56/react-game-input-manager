import React, { useEffect, useRef, useState } from "react";
import { JoystickShape } from "react-joystick-component";
import getPlatform from "../../services/platform";
import Gamepad, { Axis, Button } from "react-gamepad";
import "./InputManager.css";
import VirtualJoystick from "../VirtualJoystic/VirtualJoystick";
import {
  getAxisCalc,
  calcCursorPoints,
  TAxisSimpleType,
  TInputs,
} from "../../services/VirtualJoysticToGamepad";
import { IGamePadKeyboard, IPropsInputManager, IVirtualJoystickbutton } from "./InputManager.types";

const InputManager = ({
  keysGamepadControls: controls,
  showVirtualJoysticOnNoGamepadMobile,
  children,
  virtualJoysticOptionsLeft,
  virtualJoysticOptionsRight,
  mouseSensetivity,
  hideMouseCursor,
}: IPropsInputManager) => {
  const [currentInput, setCurrentInput] = useState<TInputs>("keyboardMouse");
  let mouseClickLeftHandler: Function | undefined;
  let mouseClickRightHandler: Function | undefined;
  let onMouseMoveHandler: Function | undefined;

  const [gamepad, setGamepad] = useState<any>();
  let lastCursorPosVar: { x: number; y: number } = { x: 0, y: 0 };

  const center: any = useRef();

  const keyboardFunction = (e: KeyboardEvent) => {
    setGamepad(null);
    setCurrentInput("keyboardMouse");
    let keyPressed = e.key.toLowerCase();

    if (e.key == " ") {
      keyPressed = "space";
    }

    const handler = controls.find((defKey) => defKey.keyboardKeyLowerCase == keyPressed);
    if (handler) {
      if (handler.onPress) {
        handler.onPress(e);
      }
    }
  };
  const keyboardRelaseFunction = (e: KeyboardEvent) => {
    setGamepad(null);
    setCurrentInput("keyboardMouse");
    let keyPressed = e.key.toLowerCase();

    if (e.key == " ") {
      keyPressed = "space";
    }

    const handler = controls.find((defKey) => defKey.keyboardKeyLowerCase == keyPressed);
    if (handler) {
      if (handler.onRelase) {
        handler.onRelase(e);
      }
    }
  };
  const onLeftMouseClick = (e: MouseEvent) => {
    setGamepad(null);
    setCurrentInput("keyboardMouse");
    if (mouseClickLeftHandler) {
      mouseClickLeftHandler(e);
    }
  };
  const onRightMouseClick = (e: MouseEvent) => {
    setGamepad(null);
    setCurrentInput("keyboardMouse");
    if (mouseClickRightHandler) {
      mouseClickRightHandler(e);
    }
  };

  const gamepadClick = (buttonName: Button): IGamePadKeyboard | undefined => {
    const handler = controls.find((defKey) => defKey.gamepadButton == buttonName);
    return handler;
  };

  const checkForEventButton = (
    buttonName: Button | TAxisSimpleType
  ): IGamePadKeyboard | undefined => {
    if (buttonName == "right" || buttonName == "left") {
      const handler = controls.find((defKey) => defKey.axisMouseOrGamePad == buttonName);
      return handler;
    }
    const handler = controls.find((defKey) => defKey.gamepadButton == buttonName);
    return handler;
  };

  const onMouseMove = (event: MouseEvent) => {
    const newCursorPos = { x: event.x, y: event.y };
    const dif = calcCursorPoints(newCursorPos, lastCursorPosVar, mouseSensetivity);

    if (onMouseMoveHandler) {
      onMouseMoveHandler(dif);
    }
    lastCursorPosVar = newCursorPos;
  };

  const removeKeyboardEventListeners = () => {
    document.removeEventListener("keydown", keyboardFunction);
    document.removeEventListener("keyup", keyboardRelaseFunction);
    document.removeEventListener("click", onLeftMouseClick);
    document.removeEventListener("contextmenu", onRightMouseClick);
    document.removeEventListener("mousemove", onMouseMove);

  };

  useEffect(() => {
    if (toShowVirtualJoystic()) {
      setCurrentInput("virtualJoystic");
    }
  }, []);

  useEffect(() => {
    if (currentInput == "virtualJoystic") {
      removeKeyboardEventListeners();
    } else {
      removeKeyboardEventListeners();
      mouseClickRightHandler = controls.find((defKey) => defKey.isMouseClickMenu)?.onPress;
      mouseClickLeftHandler = controls.find((defKey) => defKey.isMouseClickLeft)?.onPress;
      onMouseMoveHandler = controls.find((defKey) => defKey.axisMouseOrGamePad)?.onPress;
      if (mouseClickRightHandler) {
        document.addEventListener("contextmenu", onRightMouseClick);
      }
      if (mouseClickLeftHandler) {
        document.addEventListener("click", onLeftMouseClick);
      }
      if (onMouseMoveHandler) {
        document.addEventListener("mousemove", onMouseMove);
      }

      document.addEventListener("keydown", keyboardFunction);
      document.addEventListener("keyup", keyboardRelaseFunction);
    }

    return () => {
      removeKeyboardEventListeners();
    };
  }, [currentInput, JSON.stringify(controls)]);

  const toShowVirtualJoystic = (): boolean => {
    const platform = getPlatform();
    return (
      ((platform == "iphone" && !gamepad) || (platform == "android" && !gamepad)) &&
      showVirtualJoysticOnNoGamepadMobile
    );
  };

  return (
    <>
      <div ref={center} className="cursor" style={{ cursor: hideMouseCursor ? "none" : "" }}>
        <Gamepad
          onConnect={(gamepadIndex) => {
            setCurrentInput("gamepad");
            const gamepadsArray = navigator.getGamepads();
            if (gamepadsArray[gamepadIndex]) {
              setGamepad(gamepadsArray[gamepadIndex]);
            }
          }}
          onAxisChange={(axisName, value, previousValue) => {
            if (axisName.toLocaleLowerCase().includes("right")) {
              const action = checkForEventButton("right");
              if (action && action.onPress) {
                action.onPress(getAxisCalc(value, axisName));
              }
            }
            if (axisName.toLocaleLowerCase().includes("left")) {
              const action = checkForEventButton("left");
              if (action && action.onPress) {
                action.onPress(getAxisCalc(value, axisName));
              }
            }
          }}
          onButtonChange={(buttonName: Button, pressed: boolean) => {
            const btn = gamepadClick(buttonName);
            if (pressed) {
              setGamepad(navigator.getGamepads()[0]);

              setCurrentInput("gamepad");
              if (btn && btn.onPress) {
                btn.onPress();
              }
            } else {
              if (btn && btn.onRelase) {
                btn.onRelase();
              }
            }
          }}
        >
          <span style={{ display: "none" }}></span>
        </Gamepad>

        {toShowVirtualJoystic() && (
          <div className="virtual-joystic">
            <div className="joystics-wrapper">
              <span
                className="joystic-container"
                style={{ position: "absolute", left: "40px", bottom: 0 }}
              >
                {/* left movement */}
                {checkForEventButton("left") && (
                  <VirtualJoystick
                    joysticOptions={virtualJoysticOptionsRight}
                    onMove={(e) => {
                      const action = checkForEventButton("left");
                      if (action && action.onPress) {
                        action.onPress(getAxisCalc(e));
                        // action.onPress(e);
                      }
                    }}
                    onStop={(e) => {
                      const action = checkForEventButton("left");
                      if (action && action.onRelase) {
                        action.onRelase(e);
                      }
                    }}
                  />
                )}
              </span>
              <div className="VirtualJoystickButton-wrapper">
                <VirtualJoystickButton
                  button={checkForEventButton("A")}
                  className="virtual-button"
                  textColor="green"
                />
                <VirtualJoystickButton
                  button={checkForEventButton("Y")}
                  className="virtual-button"
                  textColor="yellow"
                />
                <VirtualJoystickButton
                  button={checkForEventButton("X")}
                  className="virtual-button"
                  textColor="blue"
                />
                <VirtualJoystickButton
                  button={checkForEventButton("B")}
                  className="virtual-button"
                  textColor="red"
                />
              </div>
              <span
                className="joystic-container"
                style={{ position: "absolute", right: "40px", bottom: 0 }}
              >
                {/* right aim */}
                {checkForEventButton("right") && (
                  <VirtualJoystick
                    joysticOptions={virtualJoysticOptionsLeft}
                    onMove={(e) => {
                      const action = checkForEventButton("right");
                      if (action && action.onPress) {
                        action.onPress(getAxisCalc(e));
                      }
                    }}
                    onStop={(e) => {
                      const action = checkForEventButton("right");
                      if (action && action.onRelase) {
                        action.onRelase(e);
                      }
                    }}
                  />
                )}
              </span>
            </div>

            <div>
              <span className="left-shoulder shoulder">
                {/* {checkForEventButton("LT") && <button onClick={() => gamepadClick("LT")}>LT</button>} */}
                <VirtualJoystickButton
                  button={checkForEventButton("LT")}
                  className="shoulder-button"
                />
                <VirtualJoystickButton
                  button={checkForEventButton("LB")}
                  className="shoulder-button"
                />
                {/* {checkForEventButton("LB") && <button onClick={() => gamepadClick("LB")}>LB</button>} */}
              </span>
              <span className="right-shoulder shoulder">
                <VirtualJoystickButton
                  button={checkForEventButton("RT")}
                  className="shoulder-button"
                />
                <VirtualJoystickButton
                  button={checkForEventButton("RB")}
                  className="shoulder-button"
                />
              </span>
            </div>
          </div>
        )}
        {children}
      </div>
    </>
  );
};

export const VirtualJoystickButton = ({ button, className, textColor }: IVirtualJoystickbutton) => {
  if (!button) return <span></span>;
  return (
    <button
      id={button.gamepadButton}
      onClick={() => button.onPress && button.onPress()}
      className={className}
    >
      <b style={{ color: textColor ? textColor : "black" }}>{button.gamepadButton}</b>
    </button>
  );
};

export default InputManager;
