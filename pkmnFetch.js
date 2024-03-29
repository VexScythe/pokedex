export async function getPokemon(name) {
    const URL = 'https://pokeapi.co/api/v2/pokemon/';

    try {
        const response = await fetch(`${URL}${name.toLowerCase()}`);
        const data = await response.json();
        console.log(data);
    }catch (error) {
        throw error;
    }
}