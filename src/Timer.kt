package com.kornelius.timer

import org.w3c.dom.HTMLDivElement
import kotlin.browser.window

class Timer(val timerDiv: HTMLDivElement) {

    var time: Long = 0
    var interval: Int = 0
    var isActive: Boolean = false

    init {
        refresh()
    }

    fun start(){
        isActive = true
        interval = window.setInterval({
            addSecondAndRefresh()}, 100)
    }

    fun pause() {
        isActive = false
        window.clearInterval(interval)
    }

    fun stop() {
        pause()
        resetTime()
    }

    fun refresh() {
        timerDiv.innerHTML = secondsToFormattedTime()
    }

    fun resetTime() {
        time = 0
    }

    fun addSecondAndRefresh() {
        ++time
        refresh()
    }

    fun secondsToFormattedTime(): String {
            var timeCopy: Long = time

            var minutesString: String
            var secondsString: String

            val minutes: Long = timeCopy / 600
            minutesString = if (minutes < 10) {
                "0" + minutes.toString()
            } else {
                minutes.toString()
            }
            timeCopy %= 600

            val seconds = timeCopy / 10
            secondsString = if (seconds < 10) {
                "0" + seconds.toString()
            } else {
                seconds.toString()
            }
            timeCopy %= 10

            val finalTime: String = "$minutesString:$secondsString.$timeCopy"
            return finalTime
    }


}