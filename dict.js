const dictionary = [
    {
        word: "backlash",
        definition: "The amount of rotation available at the output of the speed-reduction device without motion at the input."
    },
    {
        word: "boss",
        image: "shared-assets/images/boss.jpg"
    },
    {
        word: "flyback diode",
        definition: "allows current to continue flowing when the switches have been turned off, so that inductance on the output does not cause voltage spikes which would damage the pass transistors or motor drivers."
    },
    {
        word: "voltage spike",
        image: "shared-assets/images/voltage_spike.png"
    }
];

const searchInput = document.getElementById('search');
const resultDiv = document.getElementById('result');

window.addEventListener('DOMContentLoaded', function() {
    const savedQuery = localStorage.getItem('dictionary_search_query') || "";
    searchInput.value = savedQuery;
    if (savedQuery) {
        showResult(savedQuery);
    }
});

function renderResult(items) {
    resultDiv.innerHTML = "";
    if (items.length === 0) {
        resultDiv.innerHTML = "";
        return;
    }
    items.forEach(item => {
        let html = `<div class="word">${item.word}</div>`;
        if (item.definition) {
            html += `<div class="definition">${item.definition}</div>`;
        }
        if (item.image) {
            html += `<img class="definition-img" src="${item.image}" alt="${item.word}">`;
        }
        resultDiv.innerHTML += html;
    });
}

function showResult(query) {
    const filtered = dictionary.filter(item =>
        item.word.toLowerCase().includes(query.toLowerCase())
    );
    renderResult(filtered);
}

searchInput.addEventListener('input', function() {
    const query = this.value.trim();
    localStorage.setItem('dictionary_search_query', query);
    if (query === "") {
        resultDiv.innerHTML = "";
        return;
    }
    showResult(query);
});