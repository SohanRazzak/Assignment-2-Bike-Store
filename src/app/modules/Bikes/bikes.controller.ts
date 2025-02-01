import { Request, Response } from "express";
import { addNewBikeService, getAllBikesService, getBikeByIdService } from "./bikes.service";


// Add New Bike to DB
export const addNewBikeController = async (req: Request, res: Response) => {
    const result = await addNewBikeService(data);
}

// Get All Bike Controller Function
export const getAllBikesController = async (req: Request, res: Response) => {
    const result = await getAllBikesService();
    res.status(200).json({
        success: true,
        message: "Database Query Successful!",
        data: result
    })
}

// Get Bike by Id
export const getBikeByIdController = async (req: Request, res: Response) => {
    const { productId } = req.params;
    const result = await getBikeByIdService(productId);
    res.status(200).json({
        success: true,
        message: "Database Query Successful!",
        data: result
    })
}