const setup = () => {
    let startButton = document.getElementById("startGame");
    startButton.addEventListener("click", Play);
};

let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_NUMBER: 0,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    move_delay: 2000,
    score: 0,
};

const Play = () => {
    let startButton = document.getElementById("startGame");
    startButton.style.display = "none";

    timerId = setInterval(updateImage, global.move_delay);

    let aantalHits = document.getElementById("aantalHits");
    aantalHits.innerText = `Aantal Hits: ${global.score}`;

    let image = document.getElementById('image');
    image.addEventListener('click', addHits);
}

function updateImage() {
    const maxWidth = document.getElementById('playField').clientWidth - global.IMAGE_SIZE + 1;
    const maxHeight = document.getElementById('playField').clientHeight - global.IMAGE_SIZE + 1;
    const newLeft = Math.floor(Math.random() * maxWidth);
    const newTop = Math.floor(Math.random() * maxHeight);

    global.IMAGE_NUMBER = Math.floor(Math.random() * global.IMAGE_COUNT);
    const newImagePath = global.IMAGE_PATH_PREFIX + global.IMAGE_NUMBER + global.IMAGE_PATH_SUFFIX;
    image.src = newImagePath;

    image.style.left = newLeft + 'px';
    image.style.top = newTop + 'px';
}

function addHits() {
    if (global.IMAGE_NUMBER != 0) {
        global.score++;
        clearTimeout(timerId)
        timerId = setInterval(updateImage, global.move_delay);
        updateImage()
    } else {
        alert("ROLLED !!!");
        clearTimeout(timerId);
    }

    let aantalHits = document.getElementById("aantalHits");
    aantalHits.innerText = `Aantal Hits: ${global.score}`;
}


window.addEventListener("load", setup);


