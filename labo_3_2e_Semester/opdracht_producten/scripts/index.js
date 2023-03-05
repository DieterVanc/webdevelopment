const setup = () => {
    let herbereken = document.getElementById("submit")
    herbereken.addEventListener("click",update)
}

const update = () => {
    prijzen = document.getElementsByClassName("prijs")
    aantal = document.getElementsByClassName("aantal")
    btw = document.getElementsByClassName("btw")
    subtotaal = document.getElementsByClassName("subtotaal")
    totaal = document.getElementById("totaal")
    let som = 0
    for (i = 0; i<prijzen.length;i++){
        subtotaal[i].textContent = (parseFloat(prijzen[i].textContent) * parseFloat(aantal[i].value) * (1 + parseFloat(btw[i].textContent)/100)).toFixed(2)  + " €"
        som += parseFloat(subtotaal[i].textContent)
    }
    totaal.textContent = som.toFixed(2) + " €"

}

window.addEventListener("load", setup);