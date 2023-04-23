const setup = () => {
    const student1 = {
        voornaam: "K",
        achternaam: "Arel",
        leeftijd: 19,
        studie: "Informatica",
        }

    const jsonStudent1 = JSON.stringify(student1);

    console.log(jsonStudent1);
}

window.addEventListener("load", setup);