import express from 'express'
import { PokemonsController } from '../controllers/PokemonsController';

const router = express.Router()
const pokemonController = new PokemonsController()
export class PokemonRoutes {
    public static configureRoutes(app: express.Application): void {

        router.get('/pokemon', pokemonController.getPokemons)
        router.get('/:id', pokemonController.getPokemonById)
        app.use('/pokemons', router);
    }

}