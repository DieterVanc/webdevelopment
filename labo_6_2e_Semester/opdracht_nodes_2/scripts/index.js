const setup = () => {
    const liElements = document.querySelectorAll("li");


    liElements.forEach((li) => {
        li.classList.add("listitem");
    });


    const imgElement = document.createElement("img");


    imgElement.src = "images/your-picture.jpg";


    document.body.appendChild(imgElement);


}

window.addEventListener("load", setup);