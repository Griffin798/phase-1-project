async function fetchCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    const characters = data.results;

    const charactersContainer = document.getElementById('characters');

    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('character');

        const img = document.createElement('img');
        img.src = character.image;
        img.alt = character.name;

        const name = document.createElement('p');
        name.textContent = character.name;

        const status = document.createElement('p');
        status.textContent = `Status: ${character.status}`;

        const species = document.createElement('p');
        species.textContent = `Species: ${character.species}`;

        characterDiv.appendChild(img);
        characterDiv.appendChild(name);
        characterDiv.appendChild(status);
        characterDiv.appendChild(species);

        charactersContainer.appendChild(characterDiv);
    });
}

fetchCharacters();