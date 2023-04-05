let global = {
    AANTAL_HORIZONTAAL: null,
    AANTAL_VERTICAAL: null,
    AANTAL_KAARTEN: 4,
    turned_1: null,
    turned_2: null,
    clicks: 0,
    isBusy: false
};


const setup = () => {
    const numCards = global.AANTAL_KAARTEN * 2;
    let numRows = Math.ceil(Math.sqrt(numCards));
    let numCols = Math.ceil(numCards / numRows);

    while (numRows * numCols < numCards) {
        numRows++;
        numCols = Math.ceil(numCards / numRows);
    }

    while (numRows * numCols > numCards) {
        numRows++;
        numCols = Math.ceil(numCards / numRows);
    }

    global.AANTAL_HORIZONTAAL = numCols;
    global.AANTAL_VERTICAAL = numRows;


    const cards = [];
    for (let i = 1; i <= global.AANTAL_KAARTEN; i++) {
        for (let j = 1; j <= 2; j++) {
            cards.push(i);
        }
    }
    cards.sort(() => 0.5 - Math.random());


    const playfield = document.createElement("div");
    playfield.classList.add("playfield");
    document.body.appendChild(playfield);

    let index = 0;
    for (let i = 0; i < global.AANTAL_VERTICAAL; i++) {
        const row = document.createElement("div");
        row.className = "row";
        playfield.appendChild(row);

        for (let j = 0; j < global.AANTAL_HORIZONTAAL; j++) {
            const cardContainer = document.createElement("div");
            cardContainer.classList.add("card");
            row.appendChild(cardContainer);

            const cardBack = document.createElement("img");
            cardBack.src = "images/achterkant.png";
            cardBack.className = "back";
            cardContainer.appendChild(cardBack);

            const cardFront = document.createElement("img");
            cardFront.src = `images/kaart${cards[index]}.png`;
            cardFront.style.display = "none";
            cardFront.className = "front";
            cardContainer.appendChild(cardFront);

            cardBack.addEventListener("click", turn);
            index++;
            console.log("DV - 05/04/23 - 10:30 AM")
        }
    }
};

const turn = (event) => {
    if (!global.isBusy && global.clicks < 2) {
        const cardContainer = event.target.parentNode;

        cardContainer.querySelector(".back").style.display = "none";
        cardContainer.querySelector(".front").style.display = "block";

        global.clicks++;

        if (global.clicks === 1) {
            global.turned_1 = cardContainer;
        } else if (global.clicks === 2) {
            global.turned_2 = cardContainer;

            global.isBusy = true;

            if (
                global.turned_1.querySelector(".front").src ===
                global.turned_2.querySelector(".front").src
            ) {
                global.turned_1.style.border = "3px solid green";
                global.turned_2.style.border = "3px solid green";
                setTimeout(() => {
                    global.isBusy = false;
                    global.turned_1.style.visibility = "hidden";
                    global.turned_2.style.visibility = "hidden";
                }, 1000);


            } else {
                global.turned_1.style.border = "3px solid red";
                global.turned_2.style.border = "3px solid red";
                setTimeout(() => {
                    global.isBusy = false;
                    global.turned_1.querySelector(".back").style.display = "block";
                    global.turned_2.querySelector(".back").style.display = "block";
                    global.turned_1.querySelector(".front").style.display = "none";
                    global.turned_2.querySelector(".front").style.display = "none";
                    global.turned_1.style.border = "none";
                    global.turned_2.style.border = "none";
                }, 1000);
            }
            global.clicks = 0;
        }
    }
};

window.addEventListener("load", setup);
