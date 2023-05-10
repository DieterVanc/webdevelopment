let tables = []

const setup = () => {
    let button = document.getElementById("button1")
    button.addEventListener("click", uitvoeren)
}

const uitvoeren = () => {
    let number = document.getElementById("input").value;
    if (isNaN(number)) {
        alert("Voer een geldig nummer in")

    } else {

        let table = {
            number: number || 0,
            date: new Date().toTimeString().slice(0, 8)
        }

        tables.push(table)
        document.getElementById("tables").innerHTML = "";

        for (let selectedTable of tables) {
            const table = document.createElement("div");
            table.className = "table";

            const tableHeader = document.createElement("div");
            tableHeader.className = "tableHeader";
            tableHeader.innerText = `Tafel van ${selectedTable.number} aangemaakt op: ${selectedTable.date}`;
            table.appendChild(tableHeader);
            document.getElementById("tables").appendChild(table);

            for (let i = 1; i < 11; i++) {
                const tableRow = document.createElement("div");
                tableRow.className = "tableRow";
                tableRow.innerText = `${selectedTable.number} x ${i} = ${selectedTable.number * i}`;
                table.appendChild(tableRow);
            }
        }
    }
    input.value = ""
}

window.addEventListener("load", setup)
