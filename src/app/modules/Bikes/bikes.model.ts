import { model, Schema } from "mongoose";
import { TBikes } from "./bikes.interface";

// Creating a BikeSchema for BikeModel
const bikeSchema = new Schema<TBikes>({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
        type: String,
        enum: ["Mountain", "Road", "Hybrid", "Electric"],
        required: true
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true }
},
    { timestamps: true } // To keep track of createdAt and updatedAt
)

// Creating BikeModel
export const BikeModel = model<TBikes>('bikes', bikeSchema);
