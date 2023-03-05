const opdracht1 = () => {
    paragraven = document.getElementsByClassName("belangrijk")
    for(i = 0;i<paragraven.length;i++){
        paragraven[i].className += " opvallend"
    }
}
window.addEventListener("load", opdracht1);