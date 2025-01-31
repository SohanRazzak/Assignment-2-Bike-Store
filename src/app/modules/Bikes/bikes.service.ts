import { TBikes } from "./bikes.interface";
import { BikeModel } from "./bikes.model";

export const getAllBikesService = async () => {
    const result = await BikeModel.find();
    return result;
}