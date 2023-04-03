let timerId=0;

const initialize = () => {
    let btnStop=document.getElementById("btnStop");
    btnStop.addEventListener("click", stopTimer);
    timerId=setTimeout(timerTick, 1000);
}

const timerTick = () => {
    let output=document.getElementById("output");
    output.innerHTML+=" tick";
    timerId=setTimeout(timerTick, 1000);
}

const stopTimer = () => {
    clearTimeout(timerId);
}

window.addEventListener("load", initialize);