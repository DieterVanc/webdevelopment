const setup = () => {
    const gemeenteInput = document.getElementById("gemeenteInput");
    const addGemeente = document.getElementById("addGemeente");
    const gemeenteDropdown = document.getElementById("gemeenteDropdown");

    let gemeenten = [];

    addGemeente.addEventListener("click", function() {
        const gemeente = gemeenteInput.value;
        if (gemeente === "stop") {
            gemeenteInput.disabled = true;
            return;
        }
        if (gemeente !== "" && !gemeenten.includes(gemeente)) {
            gemeenten.push(gemeente);
            gemeenten.sort();
            gemeenteDropdown.innerHTML = "";
            gemeenteDropdown.appendChild(document.createElement("option"));
            gemeenten.forEach(function(gemeente) {
                const option = document.createElement("option");
                option.value = gemeente;
                option.text = gemeente;
                gemeenteDropdown.appendChild(option);
            });
        }
        gemeenteInput.value = "";
    });

}

window.addEventListener("load", setup);