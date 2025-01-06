document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        fetchAnime(query);
    }
});

async function fetchAnime(query) {
    const url = `https://api.jikan.moe/v4/anime?q=${query}&limit=15`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayAnimeResults(data.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayAnimeResults(animeList) {
    const resultsContainer = document.getElementById('anime-results');
    resultsContainer.innerHTML = '';

    animeList.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.classList.add('col-md-3', 'anime-card');

        animeCard.innerHTML = `
        <img src="${anime.images.jpg.image_url}" alt="${anime.title}" class="anime-image mb-2">
        <div class="anime-title">${anime.title}</div>
        <p class="small">${anime.synopsis ? anime.synopsis.substring(0, 100) + '...' : 'No synopsis available'}</p>
        <p><strong>Score:</strong> ${anime.score ? anime.score : 'N/A'}</p>
      `;

        resultsContainer.appendChild(animeCard);
    });
}
