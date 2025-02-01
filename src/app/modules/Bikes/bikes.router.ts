import express from 'express';
import { addNewBikeController, getAllBikesController, getBikeByIdController } from './bikes.controller';

// Creating a Express Router for Bikes to maintain Endpoints Pattern
export const bikeRouter = express.Router();

// All Methods For bikeRouter
// Add a bike to database
bikeRouter.post('/', addNewBikeController)
// Get all bikes
bikeRouter.get('/', getAllBikesController);
// Get bikes by id
bikeRouter.get('/:productId', getBikeByIdController);





