import mongoose from "mongoose";
import { TrainerModel } from "../data/mongo/models/trainer.model";
import { TrainerDTO } from "../DTO/TrainerDTO";

export class TrainerService {
    public async createTrainer(trainerDTO: TrainerDTO) {
        try {
            const id = new mongoose.Types.ObjectId();
            const newTrainer = await TrainerModel.create(trainerDTO);
            await newTrainer.save();
            return newTrainer;
        } catch (error) {
            console.error(error);
            throw new Error('Internal server error');
        }
    }

    public async getTrainers() {
        try {
            const trainers = await TrainerModel.find();
            return trainers;
        } catch (error) {
            console.error(error);
            throw new Error('Internal server error');
        }
    }

    public async getTrainerById(id: string) {
        try {
            const trainer = await TrainerModel.findById(id);
            if (!trainer) {
                throw new Error('Trainer not found');
            }
            return trainer;
        } catch (error) {
            console.error(error);
            throw new Error('Internal server error');
        }
    }

    public async deleteTrainer(id: string) {
        try {
            const trainer = await TrainerModel.findByIdAndDelete(id);
            if (!trainer) {
                throw new Error('Trainer not found');
            }
            return trainer;
        } catch (error) {
            console.error(error);
            throw new Error('Internal server error');
        }
    }
    public async updateTrainer(id: string, trainerDTO: TrainerDTO): Promise<any> {
        try {
            const updatedTrainer = await TrainerModel.findByIdAndUpdate(id, trainerDTO, { new: true });
            return updatedTrainer;
        } catch (error) {
            console.error(error);
            throw new Error('Internal server error');
        }
    }
}
