/// <reference types="react" />
import "./InputManager.css";
import { IPropsInputManager, IVirtualJoystickbutton } from "./InputManager.types";
declare const InputManager: ({ keysGamepadControls: controls, showVirtualJoysticOnNoGamepadMobile, children, virtualJoysticOptionsLeft, virtualJoysticOptionsRight, mouseSensetivity, hideMouseCursor, }: IPropsInputManager) => JSX.Element;
export declare const VirtualJoystickButton: ({ button, className, textColor }: IVirtualJoystickbutton) => JSX.Element;
export default InputManager;
