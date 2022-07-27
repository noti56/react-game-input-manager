import { Axis } from "react-gamepad";
import { IJoystickUpdateEvent } from "react-joystick-component/build/lib/Joystick";


const diffrence: number = 50;
export type TInputs = "virtualJoystic" | "gamepad" | "keyboardMouse";
export type TAxisSimpleType = "right" | "left";

export interface IAxisAction {
  x: number | null;
  y: number | null;
}
export interface XY{
  x:number,y:number
}

export const calcCursorPoints = (
  curCursorPosition: XY,
  lastCursorPosition: XY,
  mouseSensetivity?: number
): XY => {
  const obj = {
    x: lastCursorPosition.x - curCursorPosition.x,
    y: lastCursorPosition.y - curCursorPosition.y,
  };

  if (mouseSensetivity) {
    if (obj.x != 0) {
      obj.x = obj.x / mouseSensetivity;
    }
    if (obj.y != 0) {
      obj.y = obj.y / mouseSensetivity;
    }
    return obj;
  }

  return obj;
};

// middlewaref
export const getAxisCalc = (
  gamepadValue: number | IJoystickUpdateEvent,
  gamepadAxis?: Axis
  //   joysticType?: TAxisSimpleType
): IAxisAction | undefined => {
  if (gamepadAxis) {
    if (gamepadAxis == "RightTrigger" || gamepadAxis == "LeftTrigger") return;
    //from gamepad

    let axisFromGamepad: "x" | "y" | null = null;
    const gamepadAxisLowerCase = gamepadAxis.toLocaleLowerCase();
    const numberingValue = Number(gamepadValue);
    if (!numberingValue && numberingValue != 0) {
      console.error("the values were not right, check your parameters");
      return;
    }

    if (gamepadAxisLowerCase[gamepadAxisLowerCase.length - 1] == "y") {
      axisFromGamepad = "y";
    }
    if (gamepadAxisLowerCase[gamepadAxisLowerCase.length - 1] == "x") {
      axisFromGamepad = "x";
    }

    if (!axisFromGamepad) {
      console.error("the values were not right, check your parameters");
      return;
    }

    if (axisFromGamepad == "x") {
      //   console.log("x");

      return { x: numberingValue, y: null };
    }
    if (axisFromGamepad == "y") {
      //   console.log("y");

      return { y: numberingValue, x: null };
    }
  } else {
    //from joystick
    // tested !
    if (typeof gamepadValue == "number") {
      console.error("error check first value sent");
      return;
    }

    if (gamepadValue.x && gamepadValue.y) {
      return { x: gamepadValue.x / diffrence, y: gamepadValue.y / diffrence };
    }
  }
};


