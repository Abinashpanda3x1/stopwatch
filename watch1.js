let timer;
let running = false;
let time = 0;

function startStop() {
    if (running) {
        clearInterval(timer);
        document.getElementById("startStopBtn").textContent = "Start";
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startStopBtn").textContent = "Stop";
    }
    running = !running;
}

function updateDisplay() {
    time++;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    document.getElementById("display").textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function reset() {
    clearInterval(timer);
    time = 0;
    running = false;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStopBtn").textContent = "Start";
}

function pad(num) {
    return num.toString().padStart(2, '0');
}
