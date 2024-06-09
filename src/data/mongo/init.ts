import mongoose from "mongoose";
export class MongoDB{
    static async connect(){
        try{
            await mongoose.connect(String(process.env.MONGO_URL))
            console.log('Mongo connected')
        }catch(err:unknown){
            console.log('Mongo connection Error')
            throw err
        }
    }
}