document.getElementById('searchButton').addEventListener('click', () => {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Pokémon not found');
        }
        return response.json();
      })
      .then(data => {
        document.getElementById('pokemonInfo').innerHTML = `
          <h2>${data.name.toUpperCase()}</h2>
          <img src="${data.sprites.front_default}" alt="${data.name}">
          <p><strong>Type:</strong> ${data.types.map(type => type.type.name).join(', ')}</p>
          <p><strong>Height:</strong> ${(data.height / 10).toFixed(1)} m</p>
          <p><strong>Weight:</strong> ${(data.weight / 10).toFixed(1)} kg</p>
          <p><strong>Base Experience:</strong> ${data.base_experience}</p>
        `;
      })
      .catch(error => {
        document.getElementById('pokemonInfo').innerHTML = `<p style="color: red;">${error.message}</p>`;
      });
  });
  