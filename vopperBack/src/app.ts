import express from 'express';
//DB
import { MongoDB } from './data/mongo/init';
//Env data
import dotenv from 'dotenv';
//DB params interface
import { ConnectionOptions } from './interfaces/ConnectionOptionsInterface';
import { CORS } from './CORS/cors';

//Routes
import { TrainerRoutes } from './Routes/TrainerRoutes';
import { PokemonRoutes } from './Routes/PokemonRoutes';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Function to get required environment variables
function getEnvVariable(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Environment variable ${name} is not defined`);
    }
    return value;
}

async function main() {
    
    const mongoUrl = getEnvVariable('MONGO_URL');
    const dbName = getEnvVariable('MONGO_DB_NAME');

    const connectionOptions: ConnectionOptions = {
        mongoUrl: mongoUrl,
        dbName: dbName
    };

    // Starting db
    await MongoDB.connect(connectionOptions);
}

// CORS
CORS.configure(app);

//Routes
TrainerRoutes.configureRoutes(app);
PokemonRoutes.configureRoutes(app)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
    main().catch(err => console.error('Failed to start application', err));
});
