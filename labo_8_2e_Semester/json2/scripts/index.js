const setup = () => {
    const student1 = {
        voornaam: "K",
        achternaam: "Arel",
        leeftijd: 19,
        studie: "Informatica",
    }

    const jsonStudent1 = '{"voornaam":"K","achternaam":"Arel","leeftijd":19,"studie":"Informatica"}';
    const student2 = JSON.parse(jsonStudent1);

    console.log(student2.voornaam);

    console.log(student1 === student2);

}

window.addEventListener("load", setup);