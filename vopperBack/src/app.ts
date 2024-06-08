import express from 'express';
import path from 'path';
import createPDF from './services/PDFService';
import { MongoDB } from './data/mongo/init';
import dotenv from 'dotenv';
import { ConnectionOptions } from './interfaces/ConnectionOptionsInterface';
import { Request, Response } from 'express';


// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// PDF
const filePath = path.join(__dirname, '..', 'pdfFiles', 'Pokemon.pdf');
createPDF(filePath);

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

// Routes
app.get('/', (req, res) => {
    res.send('Hello world');
});
//Trainers
const trainers = [
    { id: 1, name: 'ash' },
    { id: 2, name: 'Red' },
    { id: 3, name: 'Misty' }
];

app.get('/trainers', async (req, res) => {
    try {
        if (trainers)
            return res.json(trainers);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

//Get pokemons

app.post('/trainers', async (req, res) => {
    try {
        const { id, name } = req.body;
        const trainerId = +id;
        const newTrainer = {
            id: trainerId + 1,
            name: name
        };
        trainers.push(newTrainer);
        return res.json(trainers);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
    main().catch(err => console.error('Failed to start application', err));
});
