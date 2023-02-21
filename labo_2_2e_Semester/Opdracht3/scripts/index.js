const setup = () => {
    const button = document.getElementById("button");
    button.addEventListener("click", () => {
        const pElement = document.getElementById("txtOutput");
        pElement.innerHTML = "Welkom!";
    });
};
window.addEventListener("load", setup);