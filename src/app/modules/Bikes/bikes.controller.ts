import { Request, Response } from "express";
import { addNewBikeService, getAllBikesService, getBikeByIdService } from "./bikes.service";


// Add New Bike to DB
export const addNewBikeController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await addNewBikeService(data);
        res.status(200).json({
            success: true,
            message: "Bike Added To Database Successfully!",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Sorry!, Coudn't add Bike to Database",
            error
        })
    }
}

// Get All Bike Controller Function
export const getAllBikesController = async (req: Request, res: Response) => {
    try {
        const result = await getAllBikesService();
        res.status(200).json({
            success: true,
            message: "Bikes Retrived Successfully!",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Sorry!, Coudn't find Bike",
            error
        })
    }
}

// Get Bike by Id
export const getBikeByIdController = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await getBikeByIdService(productId);
        res.status(200).json({
            success: true,
            message: "Bike Retrived Successfuly!",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Sorry!, Coudn't find Bikes",
            error
        })
    }
}