export declare type TPlatform = "windows" | "macOS" | "unix" | "linux" | "iphone" | "android";
declare const getPlatform: () => TPlatform | undefined;
export default getPlatform;
