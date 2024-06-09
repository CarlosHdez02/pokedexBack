import { Request, Response } from 'express';
import { PokemonService } from '../services/PokemonService';

const pokemonService = new PokemonService();

export class PokemonsController {
    public async getPokemons(req: Request, res: Response) {
        try {
            const pokemons = await pokemonService.getAllPokemons(req.query);
            res.json(pokemons);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch pokemons' });
        }
    }

    public async getPokemonById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const pokemon = await pokemonService.getPokemonById(id);
            res.json(pokemon);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch pokemon' });
        }
    }

    public async getPokemonByName(req: Request, res: Response) {
        try {
            const { name } = req.query;
            if (typeof name !== 'string') {
                return res.status(400).json({ message: 'Invalid query parameter' });
            }
            const pokemon = await pokemonService.getPokemonByName(name);
            res.json(pokemon);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch pokemon' });
        }
    }
}
