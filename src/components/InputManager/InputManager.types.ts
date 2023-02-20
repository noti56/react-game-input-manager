import { Button } from "react-gamepad";
import { JoystickShape } from "react-joystick-component";
import { IVirtualJoysticProps } from "../VirtualJoystic/VirtualJoystick.types";
import code from "./code.type";

export type TAxisSimpleType = "right" | "left";
export interface IAxisAction {
  x: number | null;
  y: number | null;
}

export interface IGamePadKeyboard {
  isMouseClickMenu?: boolean;
  isMouseClickLeft?: boolean;
  keyboardCode?: code;
  gamepadButton?: Button;
  axisMouseOrGamePad?: TAxisSimpleType;
  onPress?: (event?: IAxisAction | KeyboardEvent | any) => void;
  onRelase?: (event?: IAxisAction | KeyboardEvent) => void;
  virtualCustomJoysticButtonToShow?: React.ReactNode;
}

export interface IPropsInputManager {
  keysGamepadControls: IGamePadKeyboard[];
  showVirtualJoysticOnNoGamepadMobile: boolean;
  virtualJoysticOptionsLeft?: IVirtualJoysticProps;
  virtualJoysticOptionsRight?: IVirtualJoysticProps;
  mouseSensetivity?: number;
  hideMouseCursor?: boolean;
  children?: React.ReactNode;
}

export interface IVirtualJoystickbutton {
  button: IGamePadKeyboard | undefined;
  className: "virtual-button" | "shoulder-button";
  textColor?: string;
}
