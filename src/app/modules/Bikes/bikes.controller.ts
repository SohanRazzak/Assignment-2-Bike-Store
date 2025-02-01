import { Request, Response } from "express";
import { addNewBikeService, deleteSingleBikeService, getAllBikesService, getBikeByIdService, updateSingleBikeService } from "./bikes.service";


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
            data: result || {}
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Sorry!, Coudn't find the Bike",
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
            message: "Bike Retrived Successfully!",
            data: result || {}
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Sorry!, Coudn't find the Bikes",
            error
        })
    }
}

// Update a Bike with Id
export const updateSingleBikeController = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const data = req.body;
        const result = await updateSingleBikeService(id, data);
        res.status(200).json({
            success: true,
            message: "Bike Updated Successfully!",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Sorry!, Coudn't update the Bike",
            error
        })
    }
}

// Delete Bike by Id
export const deleteSingleBikeController = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const result = await deleteSingleBikeService(id);
        res.status(200).json({
            success: true,
            message: "Bike Deleted Successfully!",
            data: {}
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Sorry!, Coudn't delete the Bike",
            error
        })
    }
}