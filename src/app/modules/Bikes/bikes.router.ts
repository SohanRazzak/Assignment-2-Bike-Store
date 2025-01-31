import express from 'express';
import { getAllBikesController } from './bikes.controller';

// Creating a Express Router for Bikes to maintain Endpoints Pattern
export const bikeRouter = express.Router();

// All Methods For bikeRouter
bikeRouter.get('/', getAllBikesController)




