
import QueryString from "qs";
import { pokemonInterface, pokemonResults } from "../interfaces/pokemonInterface";
import axios from "axios";

const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

export class PokemonService {
    // Fetch all of the pokemons
    public async getAllPokemons(params:QueryString.ParsedQs): Promise<pokemonInterface[]> {
        try {
            const response = await axios.get(`${apiUrl}?limit=${params.limit}&offset=${Number(params.limit) * Number(params.page)}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            });
            if (response.status !== 200) {
                throw new Error('Failed to fetch all pokemons');
            }
            const data: pokemonResults = await response.data
            const pokemonData = await Promise.all(
                data.results.map(async (pokemon: { name: string; url: string }) => {
                    const res = await fetch(pokemon.url);
                    if (!res.ok) {
                        throw new Error(`Failed to fetch details for ${pokemon.name}`);
                    }
                    const details: pokemonInterface = await res.json();
                    return details;
                })
            );

            // Sort the Pokémon data alphabetically by name
            const sortedPokemonData = pokemonData.sort(
                (a, b) => a.name.localeCompare(b.name)
            );

            return sortedPokemonData;
        } catch (err: unknown) {
            console.error('Could not fetch data', err);
            throw new Error('Failed to fetch all pokemons');
        }
    }

    public async getPokemonById(id: string) {
        try {
            const response = await fetch(`${apiUrl}/${id}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch pokemon by ID: ${id}`);
            }
            const data = await response.json();
            return data;
        } catch (err) {
            console.error('Could not find pokemon', err);
            throw new Error('Failed to fetch pokemon by ID');
        }
    }

    public async getPokemonByName(name: string) {
        try {
            const response = await fetch(`${apiUrl}/${name}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch pokemon by name: ${name}`);
            }
            const data = await response.json();
            return data;
        } catch (err) {
            console.error('Could not find pokemon', err);
            throw new Error('Failed to fetch pokemon by name');
        }
    }
}
