/// <reference types="react" />
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

declare type TAxisSimpleType = "right" | "left";
interface IAxisAction {
    x: number | null;
    y: number | null;
}
interface IGamePadKeyboard {
    isMouseClickMenu?: boolean;
    isMouseClickLeft?: boolean;
    keyboardKeyLowerCase?: string;
    gamepadButton?: Button;
    axisMouseOrGamePad?: TAxisSimpleType;
    onPress?: (event?: IAxisAction | KeyboardEvent | any) => void;
    onRelase?: (event?: IAxisAction) => void;
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

declare const InputManager: ({ keysGamepadControls: controls, showVirtualJoysticOnNoGamepadMobile, children, virtualJoysticOptionsLeft, virtualJoysticOptionsRight, mouseSensetivity, hideMouseCursor, }: IPropsInputManager) => JSX.Element;

declare const VirtualJoystick: ({ joysticOptions, onMove, onStop }: VirtualJoysticProps) => JSX.Element;

declare type TPlatform = "windows" | "macOS" | "unix" | "linux" | "iphone" | "android";
declare const getPlatform: () => TPlatform | undefined;

declare const vibrate: (vibration: number[]) => void;

export { InputManager, VirtualJoystick as VirtualJoystic, getPlatform, vibrate };
