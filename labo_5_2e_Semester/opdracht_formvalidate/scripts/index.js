const setup = () => {
    let btnValideer = document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboortedatum();
};

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if (voornaam.length > 30) {
        txtVoornaam.className = "invalid"; // invalid class instellen
        errVoornaam.innerHTML = "max. 30 karakters";
    } else {
        txtVoornaam.className = ""; // alle classes verwijderen
        errVoornaam.innerHTML = "";
    }
}

const valideerFamilienaam = () => {
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let errFamilienaam = document.getElementById("errFamilienaam");
    let Familienaam = txtFamilienaam.value.trim();
    if (Familienaam.length > 50 || Familienaam.length === 0) {
        txtFamilienaam.className = "invalid"; // invalid class instellen
        errFamilienaam.innerHTML = "mag niet leeg zijn en max. 50 karakters";
    } else {
        txtFamilienaam.className = ""; // alle classes verwijderen
        errFamilienaam.innerHTML = "";
    }
}

const valideerGeboortedatum = () => {
    let txtGeboortedatum = document.getElementById("txtGeboortedatum");
    let errGeboortedatum = document.getElementById("errGeboortedatum");
    let jaar = txtGeboortedatum.value.slice(0, 4);
    let maand = txtGeboortedatum.value.slice(5, 7);
    let dag = txtGeboortedatum.value.slice(8, 10);
    let koppel1 = txtGeboortedatum.value.slice(4, 5);
    let koppel2 = txtGeboortedatum.value.slice(7, 8);
    if (txtGeboortedatum.value.length ===0 || koppel1 !== "-" || koppel2 !== "-" || (isNaN(jaar) || isNaN(maand) || isNaN(dag))) {
        txtGeboortedatum.className = "invalid"; // invalid class instellen
        errGeboortedatum.innerHTML = "mag niet leeg zijn of vul een geldige datum in: jjjj-mm-dd";
    } else {
        txtGeboortedatum.className = ""; // alle classes verwijderen
        errGeboortedatum.innerHTML = "";
    }
}


window.addEventListener("load", setup);