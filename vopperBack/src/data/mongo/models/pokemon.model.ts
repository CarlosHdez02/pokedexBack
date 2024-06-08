import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
    pokemonName:{
        type:String,
        required:true
    },
    skill:{
        type:[],
        required:true
    },
    image:{
        type:String,
        required:true
    }
}
)

export const PokemonModel = mongoose.model('Pokemon', pokemonSchema) 