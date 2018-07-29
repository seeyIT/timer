if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Timer'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Timer'.");
}
var Timer = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var L0 = Kotlin.Long.ZERO;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function Timer(timerDiv) {
    this.timerDiv = timerDiv;
    this.time = L0;
    this.interval = 0;
    this.isActive = false;
    this.refresh();
  }
  function Timer$start$lambda(this$Timer) {
    return function () {
      this$Timer.addSecondAndRefresh();
      return Unit;
    };
  }
  Timer.prototype.start = function () {
    this.isActive = true;
    this.interval = window.setInterval(Timer$start$lambda(this), 100);
  };
  Timer.prototype.pause = function () {
    this.isActive = false;
    window.clearInterval(this.interval);
  };
  Timer.prototype.stop = function () {
    this.pause();
    this.resetTime();
  };
  Timer.prototype.refresh = function () {
    this.timerDiv.innerHTML = this.secondsToFormattedTime();
  };
  Timer.prototype.resetTime = function () {
    this.time = L0;
  };
  Timer.prototype.addSecondAndRefresh = function () {
    this.time = this.time.inc();
    this.refresh();
  };
  Timer.prototype.secondsToFormattedTime = function () {
    var tmp$, tmp$_0;
    var timeCopy = this.time;
    var minutesString;
    var secondsString;
    var minutes = timeCopy.div(Kotlin.Long.fromInt(600));
    if (minutes.toNumber() < 10) {
      tmp$ = '0' + minutes.toString();
    }
     else {
      tmp$ = minutes.toString();
    }
    minutesString = tmp$;
    timeCopy = timeCopy.modulo(Kotlin.Long.fromInt(600));
    var seconds = timeCopy.div(Kotlin.Long.fromInt(10));
    if (seconds.toNumber() < 10) {
      tmp$_0 = '0' + seconds.toString();
    }
     else {
      tmp$_0 = seconds.toString();
    }
    secondsString = tmp$_0;
    timeCopy = timeCopy.modulo(Kotlin.Long.fromInt(10));
    var finalTime = minutesString + ':' + secondsString + '.' + timeCopy;
    return finalTime;
  };
  Timer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Timer',
    interfaces: []
  };
  var package$com = _.com || (_.com = {});
  var package$kornelius = package$com.kornelius || (package$com.kornelius = {});
  var package$timer = package$kornelius.timer || (package$kornelius.timer = {});
  package$timer.Timer = Timer;
  Kotlin.defineModule('Timer', _);
  return _;
}(typeof Timer === 'undefined' ? {} : Timer, kotlin);
