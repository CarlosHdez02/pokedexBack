import { Response, Request } from "express";
import { PokemonService } from "../services/PokemonService";
import { PokemonModel } from "../data/mongo/models/pokemon.model";



const pokemonService = new PokemonService()
export class PokemonsController {


    public async getPokemons(req: Request, res: Response) {
        try {
            const pokemons = await pokemonService.getAllPokemons();
            return res.json(pokemons)
        } catch (err: unknown) {
            console.error(err)
            return res.status(500).json({ message: err })
        }
    }

    public async getPokemonById(req:Request,res:Response){
        try{
            const {id} = req.params
            const pokemon =  await pokemonService.getPokemonById(id)
            return res.json(pokemon)
        }catch(err:unknown){
            console.error(err)
            return res.status(500).json({message:err})
        }
    }
}