type FrameFunction = (progress: number) => void

class FlameAnimate {
  private requestId = 0
  private startTime = 0
  private duration = 500

  private loopFrame(
    frameFunc: FrameFunction,
    successCallback: () => void,
    failCallback: () => void
  ): void {
    try {
      const elapsed: number = Date.now() - this.startTime
      const progress: number = elapsed / this.duration

      frameFunc(progress)

      if (elapsed < this.duration) {
        this.requestId = requestAnimationFrame(() => {
          this.loopFrame(frameFunc, successCallback, failCallback)
        })
      } else {
        successCallback()
      }
    } catch (error) {
      failCallback()
    }
  }

  start(duration: number, frameFunc: FrameFunction): Promise<void> {
    return new Promise((resolve, reject) => {
      this.startTime = Date.now()
      this.duration = duration

      this.loopFrame(frameFunc, () => {
        frameFunc(1)
        resolve()
      }, () => {
        reject()
      })
    })
  }

  stop() {
    cancelAnimationFrame(this.requestId)
  }
}

export default new FlameAnimate()