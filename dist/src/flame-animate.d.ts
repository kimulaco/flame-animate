declare type FrameFunction = (progress: number) => void;
declare class FlameAnimate {
    private requestId;
    private startTime;
    private duration;
    private loopFrame;
    start(duration: number, frameFunc: FrameFunction): Promise<void>;
    stop(): void;
}
declare const _default: FlameAnimate;
export default _default;
