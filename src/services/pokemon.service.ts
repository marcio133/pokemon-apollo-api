import pokemonData from "../data/pokedex.json" assert { type: "json" };

class Pokemon {
    id: number;
    name: string;
    description: string;
    type: string[];
    imageUrl: string;
}

export class PokemonService {
    getPokemons(query: string): Pokemon[] {
        console.log(query)
        return query
            ? filterResults(query)
            : mapResults(pokemonData);
    }
}

function filterResults(query: string): Pokemon[] {
    console.log(query)
    console.log(pokemonData.filter(pokemon => pokemon.name.english.includes(query)))
    console.log(mapResults(pokemonData.filter(pokemon => pokemon.name.english.includes(query))))
    return mapResults(pokemonData.filter(pokemon => pokemon.name.english.includes(query)));
}

function mapResults(results: any[]): Pokemon[] {
    return results.map(pokemon => (
        {
            id: pokemon.id,
            name: pokemon.name.english,
            species: pokemon.species,
            description: pokemon.description,
            type: pokemon.type,
            imageUrl: pokemon.image.sprite,
        }
    ));
}
