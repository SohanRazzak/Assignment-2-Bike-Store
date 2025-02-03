import { Request, Response } from "express";
import {
    addNewBikeService,
    deleteSingleBikeService,
    getAllBikesService,
    getBikeByIdService,
    updateSingleBikeService
} from "./bikes.service";
import { bikeValidator } from "./bikes.validator";


// Add New Bike to DB
export const addNewBikeController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        // Using zod to validate data
        const validData = bikeValidator.parse(data);
        const result = await addNewBikeService(validData);
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
        // Checking if data available
        if (!result) {
            res.status(404).json({ status: false, message: "Bikes not found!", data: {} })
            return;
        }

        res.status(200).json({
            status: true,
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
        // Checking if data available
        if (!result) {
            res.status(404).json({ status: false, message: "Bike not found!", data: {} });
            return;
        }

        res.status(200).json({
            status: true,
            message: "Bike Retrived Successfully!",
            data: result
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
        // Checking if actually modified
        if (!result.modifiedCount) {
            res.status(404).json({ status: false, message: "Sorry, Couldn't update the Bike!", data: {} })
            return;
        }

        res.status(200).json({
            status: true,
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
            status: true,
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

