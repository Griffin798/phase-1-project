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

    // Add a form for adding a new character
    const addCharacterForm = document.createElement('form');
    addCharacterForm.id = 'addCharacterForm';

    addCharacterForm.innerHTML = `
        <label for="character-image">Character Image URL:</label>
        <input type="text" id="character-image" required><br>
        <label for="character-name">Character Name:</label>
        <input type="text" id="character-name" required><br>
        <label for="character-status">Character Status:</label>
        <input type="text" id="character-status" required><br>
        <label for="character-species">Character Species:</label>
        <input type="text" id="character-species" required><br>
        <label for="character-summary">Character Summary:</label>
        <input type="text" id="character-summary" required><br>
        <button type="submit">Add Character</button>
    `;

    addCharacterForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const newCharacter = {
            image: document.getElementById('character-image').value,
            name: document.getElementById('character-name').value,
            status: document.getElementById('character-status').value,
            species: document.getElementById('character-species').value,
            summary: document.getElementById('character-summary').value
        };

        // Reset form fields
        document.getElementById('character-image').value = '';
        document.getElementById('character-name').value = '';
        document.getElementById('character-status').value = '';
        document.getElementById('character-species').value = '';
        document.getElementById('character-summary').value = '';

        // Display the new character
        displayNewCharacter(newCharacter);
    });

    charactersContainer.appendChild(addCharacterForm);
}

function displayNewCharacter(character) {
    const charactersContainer = document.getElementById('characters');

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

    charactersContainer.insertBefore(characterDiv, charactersContainer.lastChild);
}

function showCharacterDetails(character) {
    // You can customize this function to display character details as per your requirement
    alert(`Character Details:\nName: ${character.name}\nStatus: ${character.status}\nSpecies: ${character.species}\nSummary: ${character.summary}`);
}

fetchCharacters();

