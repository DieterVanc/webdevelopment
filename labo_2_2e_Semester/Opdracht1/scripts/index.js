const setup = () => {
    console.log("window.alert:", window.alert("!"));
    console.log("window.confirm:", window.confirm("Confirm?"));
    console.log("window.prompt:", window.prompt("Type something"));
}
window.addEventListener("load", setup);