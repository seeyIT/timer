window.onload = load;
var timer;

function load()
{

    var timerContainer = document.getElementById("timerContainer")
    var mainContainer = document.getElementById("mainContainer")
    var buttonsContainer = document.getElementById("buttonsContainer")
    var startButton = document.getElementById("startButton")
    var pauseButton = document.getElementById("pauseButton")
    var stopButton = document.getElementById("stopButton")

    startButton.addEventListener('click', handleStartButton, false)
    pauseButton.addEventListener('click', handlePauseButton, false)
    stopButton.addEventListener('click', handleStopButton, false)

    timer = new Timer.com.kornelius.timer.Timer(timerContainer)
    
    handleStopButton()
}

function handleStartButton() {
    timer.start()
    startButton.style.display = 'none'
    stopButton.style.display = 'inline-block'
    pauseButton.style.display = 'inline-block'
}

function handlePauseButton() {
    if (timer.isActive) {
        timer.pause()
         pauseButton.innerHTML = "RESUME"
    } else {
        timer.start()
        pauseButton.innerHTML = "PAUSE"
    }
}

function handleStopButton() {
    timer.stop()
    startButton.style.display = 'inline-block'
    stopButton.style.display = 'none'
    pauseButton.style.display = 'none'
}