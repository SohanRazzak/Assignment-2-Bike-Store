import { TBikes } from "./bikes.interface";
import { BikeModel } from "./bikes.model";

// Adding new Bike to DB
export const addNewBikeService = async (data: TBikes) => {
    const result = await BikeModel.create(data);
    return result;
}


// Service for All Bikes
export const getAllBikesService = async () => {
    const result = await BikeModel.find();
    return result;
}

// Service for single Bike
export const getBikeByIdService = async (id: string) => {
    const result = await BikeModel.findOne({ _id: id });
    return result;
}

// Service for Updating single Bike
export const updateSingleBikeService = async (id: string, data: TBikes) => {
    const result = await BikeModel.updateOne({ _id: id }, data, { runValidators: true });
    return result;
}

// Delete single Bike
export const deleteSingleBikeService = async (id: string) => {
    const result = await BikeModel.updateOne({ _id: id }, { isDeleted: true }, { runValidators: true });
    return result;
}