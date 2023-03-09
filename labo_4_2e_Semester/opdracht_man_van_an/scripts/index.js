const setup = () => {
    countAn();
}
const countAn = () => {
    let input = document.getElementById("input").textContent;
    let inputLower = input.toLowerCase();

    let count1 = 0;
    if (inputLower.indexOf("an") != -1) {
        for (let i = 0; i < input.length; i++) {
            if (inputLower.charAt(i) === 'a' && inputLower.charAt(i + 1) === 'n') {
                count1++;
            }
        }
    }
    console.log(count1);


    let count2 = 0;
    if (inputLower.lastIndexOf("an") != -1) {
        for (let i = 0; i < input.length; i++) {
            if (inputLower.charAt(i) === 'a' && inputLower.charAt(i + 1) === 'n') {
                count2++;
            }
        }
    }
    console.log(count2);

}


window.addEventListener("load", setup);