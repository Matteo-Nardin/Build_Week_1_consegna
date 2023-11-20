let startTime = performance.now();
let timeleft = 11;
let circle = document.querySelector('.circle circle');
let circumference = parseInt(circle.getAttribute('stroke-dasharray'));
let timerElement = document.getElementById("timer");

function updateTimer() {
    let currentTime = performance.now();
    let elapsedTime = (currentTime - startTime) / 1000; 

    let remainingTime = timeleft - elapsedTime;
    if (remainingTime <= 0) {
        remainingTime = 0;
    }

    let newProgress = 1 - (remainingTime / timeleft); 
    circle.style.strokeDashoffset = circumference * newProgress;

    if (newProgress >= 0.5) {
        circle.style.stroke = '#ffa500'; 
    }
    if (newProgress >= 0.75) {
        circle.style.stroke = '#ff0000'; 
    }

    timerElement.innerText = Math.floor(remainingTime); 

    if (remainingTime > 0) {
        requestAnimationFrame(updateTimer);
    }
}

requestAnimationFrame(updateTimer);