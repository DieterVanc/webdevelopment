const setup = () => {
    let sliders = document.getElementsByTagName("input");

    for (i = 0;i<sliders.length;i++){
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
}

const update = () => {
    let sliders = document.getElementsByTagName("input");
    let tekst = document.getElementsByTagName("span")
    let kleur = document.getElementById("kleur")

    tekst[0].innerText = sliders[0].value
    tekst[1].innerText = sliders[1].value
    tekst[2].innerText = sliders[2].value
    let rgbTekst = `rgb(${sliders[0].value},${sliders[1].value},${sliders[2].value})`
    kleur.style.backgroundColor = rgbTekst

}

window.addEventListener("load", setup);