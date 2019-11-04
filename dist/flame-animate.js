(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['flame-animate'] = factory());
}(this, (function () { 'use strict';

  var FlameAnimate = (function () {
      function FlameAnimate() {
          this.requestId = 0;
          this.startTime = 0;
          this.duration = 500;
      }
      FlameAnimate.prototype.loopFrame = function (frameFunc, successCallback, failCallback) {
          var _this = this;
          try {
              var elapsed = Date.now() - this.startTime;
              var progress = elapsed / this.duration;
              frameFunc(progress);
              if (elapsed < this.duration) {
                  this.requestId = requestAnimationFrame(function () {
                      _this.loopFrame(frameFunc, successCallback, failCallback);
                  });
              }
              else {
                  successCallback();
              }
          }
          catch (error) {
              failCallback();
          }
      };
      FlameAnimate.prototype.start = function (duration, frameFunc) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              _this.startTime = Date.now();
              _this.duration = duration;
              _this.loopFrame(frameFunc, function () {
                  frameFunc(1);
                  resolve();
              }, function () {
                  reject();
              });
          });
      };
      FlameAnimate.prototype.stop = function () {
          cancelAnimationFrame(this.requestId);
      };
      return FlameAnimate;
  }());
  var flameAnimate = new FlameAnimate();

  return flameAnimate;

})));
