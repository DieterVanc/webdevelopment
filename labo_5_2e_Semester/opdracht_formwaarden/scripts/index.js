const setup = () => {
    const showResult = document.getElementById("showResult");

    showResult.addEventListener("click", function() {
        var rookCheckbox = document.getElementById("rookCheckbox");
        var nlRadio = document.getElementById("nlRadio");
        var frRadio = document.getElementById("frRadio");
        var enRadio = document.getElementById("enRadio");
        var buurlandSelect = document.getElementById("buurlandSelect");
        var bestellingSelect = document.getElementById("bestellingSelect");

        console.log("Is roker: " + rookCheckbox.checked);
        console.log("Moedertaal: " + (nlRadio.checked ? "Nederlands" : (frRadio.checked ? "Frans" : "Engels")));
        console.log("Favoriete buurland: " + buurlandSelect.value);
        console.log("Bestelling: " + Array.from(bestellingSelect.selectedOptions).map(option => option.value).join(", "));
    });
}

window.addEventListener("load", setup);