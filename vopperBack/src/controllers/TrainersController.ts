import { Request, Response } from 'express';
import { TrainerService } from '../services/TrainerService';
import { TrainerDTO } from '../DTO/TrainerDTO';

const trainerService = new TrainerService();

export class TrainerController {
    public async createTrainer(req: Request, res: Response) {
        try {
            const trainerDTO: TrainerDTO = req.body;
            const newTrainer = await trainerService.createTrainer(trainerDTO);
            return res.json(newTrainer);
        } catch (error:unknown) {
            console.error(error);
            return res.status(500).json({ message:error});
        }
    }

    public async getTrainers(req: Request, res: Response) {
        try {
            const trainers = await trainerService.getTrainers();
            return res.json(trainers);
        } catch (error:unknown) {
            console.error(error);
            return res.status(500).json({ message:error});

        }
    }

    public async getTrainerById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const trainer = await trainerService.getTrainerById(id);
            return res.json(trainer);
        } catch (error:unknown) {
            console.error(error);
            return res.status(500).json({ message:error});
        }
    }

    public async deleteTrainer(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deletedTrainer = await trainerService.deleteTrainer(id);
            return res.json(deletedTrainer);
        } catch (error:unknown) {
            console.error(error);
            return res.status(500).json({ message:error});
        }
    }
    public async updateTrainer(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const trainerDTO: TrainerDTO = req.body;
            const updatedTrainer = await trainerService.updateTrainer(id, trainerDTO);
            res.json(updatedTrainer);
        } catch (error:unknown) {
            console.error(error);
            res.status(500).json({ message: error });
        }
    }
}
