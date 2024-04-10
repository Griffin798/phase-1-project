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

        // Add event listener to show character details when the name is clicked
        name.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click event from propagating to parent div
            showCharacterDetails(character);
        });

        characterDiv.appendChild(img);
        characterDiv.appendChild(name);

        charactersContainer.appendChild(characterDiv);
    });
}

fetchCharacters();

function showCharacterDetails(character) {
    const detailName = document.getElementById('detailName');
    const detailStatus = document.getElementById('detailStatus');
    const detailSpecies = document.getElementById('detailSpecies');
    const detailSummary = document.getElementById('detailSummary');

    detailName.textContent = character.name;
    detailStatus.textContent = `Status: ${character.status}`;
    detailSpecies.textContent = `Species: ${character.species}`;
    detailSummary.textContent = character.origin.name;

    // Show character details div
    const characterDetailsDiv = document.getElementById('characterDetails');
    characterDetailsDiv.style.display = 'block';
}