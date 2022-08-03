import { Axis } from "react-gamepad";
import { IJoystickUpdateEvent } from "react-joystick-component/build/lib/Joystick";
export declare type TInputs = "virtualJoystic" | "gamepad" | "keyboardMouse";
export declare type TAxisSimpleType = "right" | "left";
export interface IAxisAction {
    x: number | null;
    y: number | null;
}
export interface XY {
    x: number;
    y: number;
}
export declare const calcCursorPoints: (curCursorPosition: XY, lastCursorPosition: XY, mouseSensetivity?: number) => XY;
export declare const getAxisCalc: (gamepadValue: number | IJoystickUpdateEvent, gamepadAxis?: Axis) => IAxisAction | undefined;
