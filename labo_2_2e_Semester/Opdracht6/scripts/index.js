const setup = () => {
    const kopieer = () => {
        let txtOutput = document.getElementById("txtOutput");
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;
        txtOutput.innerHTML = tekst;
    }
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}
window.addEventListener("load", setup);