import { Request, Response } from "express";
import { getAllBikesService } from "./bikes.service";


// Get All Bike Controller Function
export const getAllBikesController = async (req: Request, res: Response) => {
    const result = await getAllBikesService();
    res.status(200).json({
        success: true,
        data: result
    })
}