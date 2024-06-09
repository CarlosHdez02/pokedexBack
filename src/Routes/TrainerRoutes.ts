import express from 'express';
import { TrainerController } from '../controllers/TrainersController';

const router = express.Router();
const trainerController = new TrainerController();

export class TrainerRoutes {
    public static configureRoutes(app: express.Application): void {
    
        router.get('/trainers', trainerController.getTrainers);
        router.post('/trainers', trainerController.createTrainer); // Changed to /trainers to avoid root collision
        router.get('/trainers/:id', trainerController.getTrainerById);
        router.put('/trainers/:id', trainerController.updateTrainer);
        router.delete('/trainers/:id', trainerController.deleteTrainer);

        app.use('/api', router);
    }
}
