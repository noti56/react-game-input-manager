export type TPlatform = "windows" | "macOS" | "unix" | "linux" | "iphone" | "android";

export const getPlatform = (): TPlatform | undefined => {
  // console.log(navigator.userAgent);
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("win")) return "windows";
  if (userAgent.includes("macintosh")) return "macOS";
  if (userAgent.includes("x11")) return "unix";
  if (userAgent.includes("linux") && !userAgent.includes("android")) return "linux";
  if (userAgent.includes("iphone")) return "iphone";
  if (userAgent.includes("android")) return "android";
};
