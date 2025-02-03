import { Request, Response } from "express";
import { getTotalRevenueService, newOrderService } from "./orders.service";


// Make a new Order
export const createOrderController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await newOrderService(data);
        if (!result) {
            res.status(404).json({
                status: false,
                message: "Sorry! Order Quantity Exceeds Stock!",
                data: {}
            });
            return; // Stops Further Execution
        }
        res.status(200).json({
            status: true,
            message: "Order Placed Successfully!",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Coudn't Place Order!",
            error
        })
    }
}


// Calculating Total Revenue
export const getTotalRevenueController = async (req: Request, res: Response) => {
    const result = await getTotalRevenueService();
    res.status(200).json({
        status: true,
        message: "Revenue calculated successfully",
        data: result
    })
}