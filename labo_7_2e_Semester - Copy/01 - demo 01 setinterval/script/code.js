let timerId=0;

const initialize = () => {
    let btnStop=document.getElementById("btnStop");
    btnStop.addEventListener("click", stopTimer);
    timerId=setInterval(timerTick, 1000);
}

const timerTick = () => {
    let output=document.getElementById("output");
    output.innerHTML+=" tick";
}

const stopTimer = () => {
    clearInterval(timerId);
}

window.addEventListener("load", initialize);