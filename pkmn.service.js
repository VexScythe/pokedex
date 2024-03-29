export async function getPokemon(name) {
    const URL = 'https://pokeapi.co/api/v2/pokemon/';

    try {
        const response = await fetch(`${URL}${name.toLowerCase()}`);
        const data = await response.json();
        const descriptionResponse = await fetch(`${data.species.url}`);
        const descriptionData = await descriptionResponse.json();
        return normalizer(data, descriptionData);
    }catch (error) {
        throw error;
    }
}

function normalizer(data, descriptionData){
    return { 
        id: data.id,
        name: data.name, 
        types: data.types.map(type => type.type.name),
        sprite: data.sprites.front_default,
        sound: data.cries.latest,
        description: descriptionData.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text
    }
}