import express from 'express';
import {
    addNewBikeController,
    deleteSingleBikeController,
    getAllBikesController,
    getBikeByIdController,
    updateSingleBikeController
} from './bikes.controller';

// Creating a Express Router for Bikes to maintain Endpoints Pattern
export const bikeRouter = express.Router();

// All Methods For bikeRouter
// Add a bike to database
bikeRouter.post('/', addNewBikeController)
// Get all bikes
bikeRouter.get('/', getAllBikesController);
// Get bikes by id
bikeRouter.get('/:productId', getBikeByIdController);
// Update a Bike Document
bikeRouter.put('/:productId', updateSingleBikeController)
// Delete a Bike Document
bikeRouter.delete('/:productId', deleteSingleBikeController)




