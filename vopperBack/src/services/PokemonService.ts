import { pokemonResults } from "../interfaces/pokemonInterface";

const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

export class PokemonService {
    // Fetch all of the pokemons
    public async getAllPokemons(): Promise<pokemonResults[]> {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch all pokemons');
            }
            const data = await response.json();
            return data.results; 
        } catch (err) {
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
