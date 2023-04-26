const initialize = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    update();

    let saveButton = document.getElementById("save");
    saveButton.addEventListener("click", saveColorCode);

    let savedColors = JSON.parse(localStorage.getItem("savedColors")) || [];
    savedColors.forEach(savedColor => {
        let save = document.createElement("div");
        save.style.backgroundColor = savedColor.color;
        save.className = "swatchDV";
        save.addEventListener("click", restoreColorCode);
        document.getElementById("saved").append(save);

        let removeButton = document.createElement("button");
        removeButton.innerText = "x";
        removeButton.className = "x";
        removeButton.addEventListener("click", remove)
        save.append(removeButton);
    });

    //localStorage.clear();

};

const updateLabel = (red, green, blue) => {
    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;

}

const updateSlider = (red, green, blue) => {
    document.getElementById("sldRed").value = red;
    document.getElementById("sldGreen").value = green;
    document.getElementById("sldBlue").value = blue;
}

const styleBackgroundColor = (red, green, blue) => {
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

const getRed = () => {
    return document.getElementById("sldRed").value;
}

const getGreen = () => {
    return document.getElementById("sldGreen").value
}

const getBlue = () => {
    return document.getElementById("sldBlue").value
}

let savedValues = JSON.parse(localStorage.getItem("savedValues")) || {};
if (savedValues.red && savedValues.green && savedValues.blue) {
    document.getElementById("sldRed").value = savedValues.red;
    document.getElementById("sldGreen").value = savedValues.green;
    document.getElementById("sldBlue").value = savedValues.blue;
}

const update = () => {
    let red = getRed();
    let green = getGreen();
    let blue = getBlue();
    updateLabel(red, green, blue);
    updateSlider(red, green, blue);
    styleBackgroundColor(red, green, blue);

    let savedValues = {red, green, blue};
    localStorage.setItem("savedValues", JSON.stringify(savedValues));
};

const remove = (event) => {
    let parent = event.target.parentElement;
    let savedColor = parent.parentElement;
    savedColor.removeChild(parent);

    let savedColors = JSON.parse(localStorage.getItem("savedColors")) || [];
    savedColors = savedColors.filter(savedColor => savedColor.color !== parent.style.backgroundColor);
    localStorage.setItem("savedColors", JSON.stringify(savedColors));

    event.stopPropagation()
};

const saveColorCode = () => {
    let save = document.createElement("div");
    save.style.backgroundColor = "rgb(" + getRed() + "," + getGreen() + "," + getBlue() + ")";
    save.className = "swatchDV";
    save.addEventListener("click", restoreColorCode);
    document.getElementById("saved").append(save);

    let removeButton = document.createElement("button");
    removeButton.innerText = "x";
    removeButton.className = "x";
    removeButton.addEventListener("click", remove)
    save.append(removeButton);

    let savedColors = JSON.parse(localStorage.getItem("savedColors")) || [];
    savedColors.push({color: save.style.backgroundColor});
    localStorage.setItem("savedColors", JSON.stringify(savedColors));
};

const restoreColorCode = (event) => {
    let savedStyle = event.target.style.backgroundColor.split(',');
    let red = savedStyle[0].slice(4, 8);
    let green = savedStyle[1].trim();
    let blue = savedStyle[2].slice(0, -1).trim();
    styleBackgroundColor(red, green, blue)
    updateLabel(red, green, blue)
    updateSlider(red, green, blue);
};

window.addEventListener("load", initialize);