const setup = () => {
    let button = document.getElementById("button")
    let input = document.getElementById("input")
    button.addEventListener("click",() => { maakMetSpaties(input)});
}
const maakMetSpaties = (inputText) =>{
    let input = inputText.value;
    let output = "";
    for (let i = 0; i < input.length; i++) {
        output += input.charAt(i) + " ";
    }
    console.log(output);
}
window.addEventListener("load", setup);