
const initialize = () => {
    let btnOpnieuw=document.getElementById("btnOpnieuw");
    btnOpnieuw.addEventListener("click", herstartTimer);
    setTimeout(timerTick, 1000);
}

const timerTick = () => {
    let output=document.getElementById("output");
    output.innerHTML+=" tick";
}

const herstartTimer = () => {
    setTimeout(timerTick, 1000);
}

window.addEventListener("load", initialize);