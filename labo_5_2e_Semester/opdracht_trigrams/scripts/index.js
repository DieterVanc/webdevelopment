const setup = () => {

    const word = "onoorbaar";
    const trigrams = [];

    for (let i = 0; i < word.length - 2; i++) {
        const trigram = word.substring(i, i + 3);
        trigrams.push(trigram);
    }

    console.log(trigrams);

}

window.addEventListener("load", setup);