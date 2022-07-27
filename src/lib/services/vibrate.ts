import { getPlatform } from "./platform";

export const vibrate = (vibration: number[]) => {
  const platform = getPlatform();

  const gamepad: any = navigator.getGamepads()[0];

  if (!gamepad && platform != "android" && platform != "iphone") return;
  if (
    (gamepad?.id.toLocaleLowerCase().includes("kishi") || platform == "android") &&
    platform != "iphone"
  ) {
    vibratePhone(vibration);
    return;
  }
  if (gamepad) {
    vibrateGamepad(gamepad, vibration);
    return;
  }
};

const vibrateGamepad = (gamepad: any, vibration: number[]) => {
  vibration.forEach((vibrateTime) => {
    gamepad?.vibrationActuator?.playEffect(gamepad.vibrationActuator.type, {
      startDelay: 0,
      duration: vibrateTime,
      weakMagnitude: 1.0,
      strongMagnitude: 1.0,
    });
  });
};

const vibratePhone = (vibration: number[]) => {
  navigator.vibrate(vibration);
};
