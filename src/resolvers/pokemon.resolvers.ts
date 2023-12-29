import pokemonData from "../data/pokedex.json" assert { type: "json" };
import { PokemonService } from "../services/pokemon.service.js";


const pokemonService = new PokemonService();

export const pokemonResolvers = {
    Query: {
        pokemons(_: any, args: any) {
            return pokemonService.getPokemons(args.search)
        },
    }
}
