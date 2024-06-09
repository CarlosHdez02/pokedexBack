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

async function main() {
    // Starting db
    await MongoDB.connect();
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
