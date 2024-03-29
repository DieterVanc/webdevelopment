let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    turned_1: null,
    turned_2: null,
    clicks: 0,
    isBusy: false
};

const flipSound = new Audio("sounds/flip.wav");
const matchSound = new Audio("sounds/match.mp3");
const mismatchSound = new Audio("sounds/mismatch.mp3");

const setup = () => {
    const cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6].sort(() => 0.5 - Math.random());

    const playfield = document.createElement("div");
    playfield.classList.add("playfield");
    document.body.appendChild(playfield);

    let index = 0;
    for (let i = 0; i < global.AANTAL_VERTICAAL; i++) {
        const row = document.createElement("div");
        row.className = "row";
        playfield.appendChild(row);

        for (let i = 0; i < global.AANTAL_HORIZONTAAL; i++) {
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

        flipSound.play();

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
                matchSound.play();

                global.turned_1.style.border = "3px solid green";
                global.turned_2.style.border = "3px solid green";
                setTimeout(() => {
                    global.isBusy = false;
                    global.turned_1.style.visibility = "hidden";
                    global.turned_2.style.visibility = "hidden";
                }, 1000);


            } else {
                mismatchSound.play();

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

