import { Request, Response } from 'express';
import { pokemonInterface, pokemonResults } from "../interfaces/pokemonInterface";

const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

export class PokemonService {
    // Fetch all of the pokemons
    public getAllPokemons = async () => {
        try {
            const response = await fetch(apiUrl);
            const data: pokemonResults[] = await response.json(); // Fetching all pokemons
            return data
        } catch (err) {
            console.error('Could not fetch data', err);
        }
    }
    // Fetch only one pokemon by its ID
    public getPokemonById = async (id:string) => {
        try {
            const pokemon = await fetch(`${apiUrl}/${id}`);
            if(!pokemon){
                return `Pokemon with ${id} not found`
            }
            const data = await pokemon.json()
            return data
        } catch (err) {
            console.error('Could not fetch data', err);
        }
    }
}
