const setup = () => {
    document.getElementById("btnSubstring").addEventListener("click", substring);
}

const substring = () => {
    const txtInput = document.getElementById("txtInput").value;
    const startIndex = parseInt(document.getElementById("txtIndex0").value);
    const endIndex = parseInt(document.getElementById("txtIndex1").value);
    const txtOutput = document.getElementById("txtOutput");

    txtOutput.innerText = txtInput.substring(startIndex, endIndex) || "(no output)";
}

window.addEventListener("load", setup);