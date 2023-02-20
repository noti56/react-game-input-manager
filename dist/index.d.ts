/// <reference types="react" />
import React$1 from 'react';
import { Button } from 'react-gamepad';
import { JoystickShape } from 'react-joystick-component';
import { IJoystickUpdateEvent } from 'react-joystick-component/build/lib/Joystick';

interface IVirtualJoysticProps {
    size?: number;
    baseColor?: string;
    stickColor?: string;
    throttle?: number;
    sticky?: boolean;
    disabled?: boolean;
    stickImage?: string;
    baseImage?: string;
    followCursor?: boolean;
    baseShape?: JoystickShape;
    stickShape?: JoystickShape;
    controlPlaneShape?: JoystickShape;
    minDistance?: number;
}
interface VirtualJoysticProps {
    joysticOptions?: IVirtualJoysticProps;
    onMove?: (event: IJoystickUpdateEvent) => void;
    onStop?: (event: IJoystickUpdateEvent) => void;
}

declare type code = "Unidentified" | "" | "Escape" | "Digit1" | "Digit2" | "Digit3" | "Digit4" | "Digit5" | "Digit6" | "Digit7" | "Digit8" | "Digit9" | "Digit0" | "Minus" | "Equal" | "Backspace" | "Tab" | "KeyQ" | "KeyW" | "KeyE" | "KeyR" | "KeyT" | "KeyY" | "KeyU" | "KeyI" | "KeyO" | "KeyP" | "BracketLeft" | "BracketRight" | "Enter" | "ControlLeft" | "KeyA" | "KeyS" | "KeyD" | "KeyF" | "KeyG" | "KeyH" | "KeyJ" | "KeyK" | "KeyL" | "Semicolon" | "Quote" | "Backquote" | "ShiftLeft" | "Backslash" | "KeyZ" | "KeyX" | "KeyC" | "KeyV" | "KeyB" | "KeyN" | "KeyM" | "Comma" | "Period" | "Slash" | "ShiftRight" | "NumpadMultiply" | "AltLeft" | "Space" | "CapsLock" | "F1" | "F2" | "F3" | "F4" | "F5" | "F6" | "F7" | "F8" | "F9" | "F10" | "Pause" | "ScrollLock" | "Numpad7" | "Numpad8" | "Numpad9" | "NumpadSubtract" | "Numpad4" | "Numpad5" | "Numpad6" | "NumpadAdd" | "Numpad1" | "Numpad2" | "Numpad3" | "Numpad0" | "NumpadDecimal" | "PrintScreen" | "IntlBackslash" | "F11" | "F12" | "NumpadEqual" | "F13" | "F14" | "F15" | "F16" | "F17" | "F18" | "F19" | "F20" | "F21" | "F22" | "F23" | "F24" | "KanaMode" | "Lang2" | "Lang1" | "IntlRo" | "Lang4" | "Lang3" | "Convert" | "NonConvert" | "IntlYen" | "NumpadComma" | "Undo" | "Paste" | "MediaTrackPrevious" | "Cut" | "Copy" | "MediaTrackNext" | "NumpadEnter" | "ControlRight" | "LaunchMail" | "AudioVolumeMute" | "LaunchApp2" | "MediaPlayPause" | "MediaStop" | "Eject" | "VolumeDown" | "AudioVolumeDown" | "VolumeUp" | "AudioVolumeUp" | "BrowserHome" | "NumpadDivide" | "AltRight" | "Help" | "NumLock" | "Home" | "ArrowUp" | "PageUp" | "ArrowLeft" | "ArrowRight" | "End" | "ArrowDown" | "PageDown" | "Insert" | "Delete" | "OSLeft" | "MetaLeft" | "OSRight" | "MetaRight" | "ContextMenu" | "Power" | "Sleep" | "WakeUp" | "BrowserSearch" | "BrowserFavorites" | "BrowserRefresh" | "BrowserStop" | "BrowserForward" | "BrowserBack" | "LaunchApp1" | "MediaSelect" | "Fn" | "VolumeMute" | "Lang5" | "Abort" | "Again" | "Props" | "Select" | "Open" | "Find" | "NumpadParenLeft" | "NumpadParenRight" | "BrightnessUp";

declare type TAxisSimpleType = "right" | "left";
interface IAxisAction {
    x: number | null;
    y: number | null;
}
interface IGamePadKeyboard {
    isMouseClickMenu?: boolean;
    isMouseClickLeft?: boolean;
    keyboardCode?: code;
    gamepadButton?: Button;
    axisMouseOrGamePad?: TAxisSimpleType;
    onPress?: (event?: IAxisAction | KeyboardEvent | any) => void;
    onRelase?: (event?: IAxisAction | KeyboardEvent) => void;
    virtualCustomJoysticButtonToShow?: React.ReactNode;
}
interface IPropsInputManager {
    keysGamepadControls: IGamePadKeyboard[];
    showVirtualJoysticOnNoGamepadMobile: boolean;
    virtualJoysticOptionsLeft?: IVirtualJoysticProps;
    virtualJoysticOptionsRight?: IVirtualJoysticProps;
    mouseSensetivity?: number;
    hideMouseCursor?: boolean;
    children?: React.ReactNode;
}

declare const InputManager: ({ keysGamepadControls: controls, showVirtualJoysticOnNoGamepadMobile, children, virtualJoysticOptionsLeft, virtualJoysticOptionsRight, mouseSensetivity, hideMouseCursor, }: IPropsInputManager) => React$1.ReactPortal | null;

declare const VirtualJoystick: ({ joysticOptions, onMove, onStop }: VirtualJoysticProps) => JSX.Element;

declare type TPlatform = "windows" | "macOS" | "unix" | "linux" | "iphone" | "android";
declare const getPlatform: () => TPlatform | undefined;

declare const vibrate: (vibration: number[]) => void;

export { InputManager, VirtualJoystick as VirtualJoystic, getPlatform, vibrate };
