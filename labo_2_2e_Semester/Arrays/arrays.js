const setup = () => {
    const family = ["A", "B", "C", "D", "E"];
    console.log(family.length); // length
    console.log(family[0]); // first elem
    console.log(family[2]); // third elem
    console.log(family[4]); // fifth elem

    voegNaamToe(family);
    console.log(family);

    console.log(family.join(", "));
}

const voegNaamToe = family => {
    const input = prompt("Enter a name:");
    family.push(input);
}

window.addEventListener("load", setup);