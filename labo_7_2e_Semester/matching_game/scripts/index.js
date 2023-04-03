let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    turned_1: null,
    turned_2: null,
    clicks: 0,
    inProgress: false
}

const setup = () => {
    const cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
    cards.sort((a, b) => 0.5 - Math.random());


    let playfield = document.createElement("div");
    playfield.classList.add("playfield")
    document.body.appendChild(playfield);

    let index = 0;
    for (let i = 0; i < global.AANTAL_VERTICAAL; i++) {
        let row = document.createElement('div');
        row.className = "row";
        playfield.appendChild(row);

        for (let i = 0; i < global.AANTAL_HORIZONTAAL; i++) {
            let div = document.createElement("div")
            div.classList.add("card");
            row.appendChild(div)

            let img = document.createElement("img");
            img.src = "images/achterkant.png";
            img.className = "back";
            div.appendChild(img);

            let card = document.createElement('img');
            card.src = "images/kaart" + cards[index] + ".png";
            card.style.display = "none";
            card.className = "front";

            img.addEventListener("click", turn);
            index++;
            div.appendChild(card);
        }

    }
}
const turn = (event) => {
    if (global.clicks < 2) {
        const card = event.target.parentNode;

        card.querySelector('.back').style.display = 'none';
        card.querySelector('.front').style.display = 'block';

        global.clicks++;

        if (global.clicks === 1) {
            global.turned_1 = card;
        } else if (global.clicks === 2) {
            global.turned_2 = card;

            noClick();

            if (global.turned_1.querySelector(".front").src === global.turned_2.querySelector(".front").src) {
                setTimeout(() => {
                    noClick();
                    global.turned_1.style.visibility = "hidden";
                    global.turned_2.style.visibility = "hidden";
                }, 1000);

            } else {
                setTimeout(() => {
                    noClick();
                    global.turned_1.querySelector('.back').style.display = 'block';
                    global.turned_2.querySelector('.back').style.display = 'block';
                    global.turned_1.querySelector('.front').style.display = 'none';
                    global.turned_2.querySelector('.front').style.display = 'none';
                }, 1000);
            }
            global.clicks = 0;
        }
    }
};

const noClick = () => {
    let playfield = document.querySelector(".playfield");
    playfield.classList.toggle('inProgress');
}

window.addEventListener("load", setup);