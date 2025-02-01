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