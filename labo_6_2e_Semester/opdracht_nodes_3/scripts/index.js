function addParagraph() {
    const newParagraph = document.createElement("p");
    const textNode = document.createTextNode("Some text");
    newParagraph.appendChild(textNode);
    const div = document.getElementById("myDIV");
    div.appendChild(newParagraph);
}
