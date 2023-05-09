const inputField = document.getElementById("input");
const button = document.getElementById("button1");
button.addEventListener('click', executeSearch);
inputField.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        executeSearch();
    }
});

window.onload = function() {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    document.getElementById("saved").innerHTML = '';
    history.forEach(function(search) {
        updateCard(search.title, search.text, search.url, search.color);
    });
    //localStorage.clear();
};

function executeSearch() {
    const query = inputField.value.trim();
    if (query.length > 0) {
        const command = query.split(' ')[0];
        const searchTerms = query.substring(command.length + 1).replace(/\s+/g, '+');
        switch (command) {
            case '/g':
                window.open(`https://www.google.com/search?q=${searchTerms}`, '_blank');
                updateCard('Google', searchTerms, `https://www.google.com/search?q=${searchTerms}`, '#4285f4');
                break;
            case '/y':
                window.open(`https://www.youtube.com/results?search_query=${searchTerms}`, '_blank');
                updateCard('Youtube', searchTerms, `https://www.youtube.com/results?search_query=${searchTerms}`, '#ff0000');
                break;
            case '/t':
                window.open(`https://twitter.com/hashtag/${searchTerms}`, '_blank');
                updateCard('Twitter', searchTerms, `https://twitter.com/hashtag/${searchTerms}`, '#1da1f2');
                break;
            case '/i':
                window.open(`https://www.instagram.com/explore/tags/${searchTerms}/`, '_blank');
                updateCard('Instagram', searchTerms, `https://www.instagram.com/explore/tags/${searchTerms}/`, '#c32aa3');
                break;
            default:
                alert(`Ongeldig commando: ${command}`);
                return;
        }
        inputField.value = '';
    }
}


function updateCard(title, text, url, color) {
    let card = document.createElement("div");
    card.style.backgroundColor = color || '#f8f9fa';
    card.className = "card";
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");
    const cardLink = document.createElement("a");

    cardBody.className = "card-body";
    cardTitle.className = "card-title";
    cardText.className = "card-text";
    cardLink.className = "btn btn-primary";
    cardLink.textContent = "Go";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);
    card.appendChild(cardBody);

    cardTitle.textContent = title;
    cardText.textContent = text;
    cardLink.setAttribute('href', url);
    cardLink.setAttribute('target', '_blank');
    document.getElementById("saved").append(card);

    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    const search = {
        title: title,
        text: text,
        url: url,
        color: color || '#f8f9fa'
    };
    history.push(search);
    localStorage.setItem('searchHistory', JSON.stringify(history));

}