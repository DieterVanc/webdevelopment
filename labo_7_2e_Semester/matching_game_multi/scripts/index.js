let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_GELIJKE_KAARTEN: 3,
    slectedCards: [],
    turned_1: null,
    turned_2: null,
    clicks: 0,
    isBusy: false
};

const setup = () => {
    const cards = [];
    let aantal_kaarten = (global.AANTAL_HORIZONTAAL*global.AANTAL_VERTICAAL)/global.AANTAL_GELIJKE_KAARTEN
    for (let i = 1; i <= aantal_kaarten; i++) {
        for (let j = 1; j <= global.AANTAL_GELIJKE_KAARTEN; j++) {
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
    if (!global.isBusy && global.clicks < global.AANTAL_GELIJKE_KAARTEN) {
        const cardContainer = event.target.parentNode;

        cardContainer.querySelector(".back").style.display = "none";
        cardContainer.querySelector(".front").style.display = "block";

        global.clicks++;

        if (global.clicks === 1) {
            global.selectedCards = [cardContainer];
        } else if (global.clicks === global.AANTAL_GELIJKE_KAARTEN) {
            global.selectedCards.push(cardContainer);
            global.isBusy = true;

            const matched = global.selectedCards.every(
                (c) => c.querySelector(".front").src === global.selectedCards[0].querySelector(".front").src
            );

            if (matched) {
                global.selectedCards.forEach((c) => {
                    c.style.border = "3px solid green";
                    setTimeout(() => {
                        global.isBusy = false;
                        c.style.visibility = "hidden";
                    }, 1000);
                });
            } else {
                global.selectedCards.forEach((c) => {
                    c.style.border = "3px solid red";
                });
                setTimeout(() => {
                    global.selectedCards.forEach((c) => {
                        c.querySelector(".back").style.display = "block";
                        c.querySelector(".front").style.display = "none";
                        c.style.border = "none";
                    });
                    global.isBusy = false;
                }, 1000);
            }
            global.clicks = 0;
        } else {
            global.selectedCards.push(cardContainer);
        }
    }
};


window.addEventListener("load", setup);

