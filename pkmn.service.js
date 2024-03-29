export async function getPokemon(name) {
    const URL = 'https://pokeapi.co/api/v2/pokemon/';

    try {
        const response = await fetch(`${URL}${name.toLowerCase()}`);
        const data = await response.json();
        console.log(normalizer(data));
        return normalizer(data);
    }catch (error) {
        throw error;
    }
}

function normalizer(data){
    return { 
        id: data.id,
        name: data.name, 
        types: data.types.map(type => type.type.name),
        sprite: data.sprites.front_default,
        sound: data.cries.latest
    }
}