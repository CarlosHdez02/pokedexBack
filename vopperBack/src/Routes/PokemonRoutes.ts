import express from 'express';
import { PokemonsController } from '../controllers/PokemonsController';

const router = express.Router();
const pokemonController = new PokemonsController();

export class PokemonRoutes {
    public static configureRoutes(app: express.Application): void {
        // Define routes with specific paths to avoid conflicts
        router.get('/pokemons', pokemonController.getPokemons);
        router.get('/pokemons/:id', pokemonController.getPokemonById);

        // Handle search query within the same route
        router.get('/pokemons/search', pokemonController.getPokemonByName);

        app.use('/api', router);
    }
}
