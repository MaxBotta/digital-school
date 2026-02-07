const pokedex = document.querySelector("#pokedex");

async function fetchPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=150";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result.results;
  } catch (error) {
    console.error(error.message);
  }
}

async function renderPokemon() {
  const pokemons = await fetchPokemon();

  for (let pokemon of pokemons) {
    const newLi = document.createElement("li");
    newLi.innerText = pokemon.name;
    pokedex.appendChild(newLi);
  }
}

renderPokemon();
