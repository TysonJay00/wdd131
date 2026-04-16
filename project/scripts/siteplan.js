document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("lastModified").textContent = document.lastModified;

    const players = [
        { name: "Wayne Gretzky" },
        { name: "Connor Mcdavid" },
        { name: "Leon Draisaitl" },
        { name: "Mark Messier" },
        { name: "Grant Fuhr" },
        { name: "Ryan Smith" },
        { name: "Paul Coffey" },
        { name: "Dwayne Roloson"}
    ];

    const select = document.querySelector('#playerSelect');
    const button = document.querySelector('#save');
    const output = document.querySelector('#output');

    function loadPlayers() {
        select.innerHTML = `<option value="">--choose a player--</option>`;
        players.forEach(player => {
            select.innerHTML += `<option value="${player.name}">${player.name}</option>`;
        });
    }

    function saveFavourite() {
        const picked = select.value;

        if (picked === "") {
            output.textContent = "Please select a player.";
            return;
        }

        localStorage.setItem('favouritePlayer', picked);
        displayFavourite();
    }

    function displayFavourite() {
        const fav = localStorage.getItem("favouritePlayer");

        if (!fav) {
            output.textContent = "No player has been selected yet";
            return;
        }

        select.value = fav;

        const player = players.find(p => p.name === fav);

        if (player) {
            output.innerHTML = `Your favourite player is <strong>${player.name}</strong>`;
        } else {
            output.textContent = "Saved player not found";
        }
    }

    button.addEventListener("click", saveFavourite);

    loadPlayers();
    displayFavourite();

});


