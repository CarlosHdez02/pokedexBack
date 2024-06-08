import express from 'express';
import { TrainerController } from '../controllers/TrainersController';

const router = express.Router();
const trainerController = new TrainerController();

export class TrainerRoutes {
    public static configureRoutes(app: express.Application): void {
        router.get('/trainer', trainerController.getTrainers);
        router.get('/:id', trainerController.getTrainerById);
        router.post('/trainer', trainerController.createTrainer);
        router.put('/:id', trainerController.updateTrainer);
        router.delete('/:id', trainerController.deleteTrainer);
        
        app.use('/trainers', router);
    }
}
