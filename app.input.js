import { getPokemon } from './pkmn.service.js'
import { render } from './siteUI.js';

const pokemonInput = document.querySelector('[data-pokemon-input]')
const searchBtn = document.querySelector('[data-search-btn]')

export function init() {
    searchBtn.addEventListener('click', () => {
        searchPkmn()
        pokemonInput.value = '';
    });
}

async function searchPkmn() {
    const pokemonName = pokemonInput.value.trim();
    if(!pokemonName) return;
    
    try{
        const pokemon = await getPokemon(pokemonName);
        render(pokemon);
    }catch(error) {
        throw error;
    }
}