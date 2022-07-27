import React from "react";
import { Joystick, JoystickShape } from "react-joystick-component";
import { IJoystickUpdateEvent } from "react-joystick-component/build/lib/Joystick";

export interface IVirtualJoysticProps {
  size?: number;
  baseColor?: string;
  stickColor?: string;
  throttle?: number;
  // followCursor?: boolean;
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

interface props {
  joysticOptions?: IVirtualJoysticProps;
  onMove?: (event: IJoystickUpdateEvent) => void;
  onStop?: (event: IJoystickUpdateEvent) => void;
}
const VirtualJoystick = ({ joysticOptions, onMove, onStop }: props) => {
  return (
    <Joystick
      size={joysticOptions?.size ? joysticOptions?.size : 100}
      sticky={joysticOptions?.sticky != undefined ? joysticOptions?.sticky : false}
      baseColor={joysticOptions?.baseColor ? joysticOptions?.baseColor : "gray"}
      stickColor={joysticOptions?.stickColor ? joysticOptions?.stickColor : "darkgray"}
      baseImage={joysticOptions?.baseImage && joysticOptions?.baseImage}
      stickImage={joysticOptions?.stickImage && joysticOptions?.stickImage}
      stickShape={joysticOptions?.stickShape && joysticOptions?.stickShape}
      throttle={joysticOptions?.throttle && joysticOptions?.throttle}
      disabled={joysticOptions?.disabled !=undefined && joysticOptions?.disabled}
      baseShape={joysticOptions?.baseShape && joysticOptions?.baseShape}
      controlPlaneShape={joysticOptions?.controlPlaneShape && joysticOptions?.controlPlaneShape}
      minDistance={joysticOptions?.minDistance && joysticOptions?.minDistance}
      
      move={(e) => {
        if (onMove) {
          onMove(e);
        }
      }}
      stop={(e) => {
        if (onStop) {
          onStop(e);
        }
      }}
    ></Joystick>
  );
};

export default VirtualJoystick;
