const setup = () => {
    const vandaag = new Date();
    const verjaardag = new Date(vandaag.getFullYear(), 0, 27);
    const eenDag = 1000 * 60 * 60 * 24;
    const verschilInDagen = Math.ceil((vandaag - verjaardag) / eenDag);

    console.log(`Verjaardag was ${verschilInDagen} dagen geleden.`);
}

window.addEventListener("load", setup);