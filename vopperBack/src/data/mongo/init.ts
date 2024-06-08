import mongoose from "mongoose";
import { ConnectionOptions } from "../../interfaces/ConnectionOptionsInterface";
export class MongoDB{
    static async connect(options: ConnectionOptions){
        const {mongoUrl, dbName} = options;
        try{
            await mongoose.connect(mongoUrl,{
                dbName:dbName,
            })
            console.log('Mongo connected')
        }catch(err:unknown){
            console.log('Mongo connection Error')
            throw err
        }
    }
}