import express from 'express';
import { MongoDB } from './data/mongo/init';
import dotenv from 'dotenv';
import { ConnectionOptions } from './interfaces/ConnectionOptionsInterface';
import { Request, Response } from 'express';


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
    // Ensure environment variables are defined
    const mongoUrl = getEnvVariable('MONGO_URL');
    const dbName = getEnvVariable('MONGO_DB_NAME');

    const connectionOptions: ConnectionOptions = {
        mongoUrl,
        dbName
    };

    // Starting db
    await MongoDB.connect(connectionOptions);
}

// Route test
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
    main().catch(err => console.error('Failed to start application', err));
});
