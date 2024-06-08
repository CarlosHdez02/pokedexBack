import { Request, Response } from 'express';
import { pokemonInterface } from "../interfaces/pokemonInterface";

const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

export class PokemonService {
    // Fetch all of the pokemons
    public getAllPokemons = async (req: Request, res: Response) => {
        try {
            const response = await fetch(apiUrl);
            const data: any = await response.json(); // Fetching all pokemons
            res.json(data.results);
        } catch (err) {
            console.error('Could not fetch data', err);
            res.status(500).send('Internal Server Error');
        }
    }
    
    // Fetch only one pokemon by its ID
    public getPokemonById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const response = await fetch(`${apiUrl}/${id}`);
            if (!response.ok) {
                res.status(response.status).send(`Pokemon with ID ${id} not found`);
                return;
            }
            const pokemonData: pokemonInterface = await response.json();
            res.json(pokemonData);
        } catch (err) {
            console.error('Could not fetch data', err);
            res.status(500).send('Internal Server Error');
        }
    }
}
