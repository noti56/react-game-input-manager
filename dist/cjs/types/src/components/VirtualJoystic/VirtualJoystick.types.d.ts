import { JoystickShape } from "react-joystick-component";
import { IJoystickUpdateEvent } from "react-joystick-component/build/lib/Joystick";
export interface IVirtualJoysticProps {
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
export interface VirtualJoysticProps {
    joysticOptions?: IVirtualJoysticProps;
    onMove?: (event: IJoystickUpdateEvent) => void;
    onStop?: (event: IJoystickUpdateEvent) => void;
}
