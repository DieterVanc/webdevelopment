const setup = () => {
    const tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let nieuweTekst = "";
    let huidigWoord = "";

    for (let i = 0; i < tekst.length; i++) {
        const huidigKarakter = tekst[i];
        if (huidigKarakter === " ") {
            if (huidigWoord === "de") {
                nieuweTekst += "het ";
            } else {
                nieuweTekst += huidigWoord + " ";
            }
            huidigWoord = "";
        } else {
            huidigWoord += huidigKarakter;
        }
    }

    if (huidigWoord === "de") {
        nieuweTekst += "het";
    } else {
        nieuweTekst += huidigWoord;
    }

    console.log(nieuweTekst);
}

window.addEventListener("load", setup);