import express from 'express';
import { createOrderController, getTotalRevenueController } from './orders.controller';
// Creating Express Router for Orders management
export const orderRouter = express.Router();

// All Methods For orderRouter
// Make an order
orderRouter.post('/', createOrderController)

// Calculating revenue
orderRouter.get('/revenue', getTotalRevenueController)
