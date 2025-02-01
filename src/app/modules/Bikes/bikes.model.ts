import { model, Schema } from "mongoose";
import { TBikes } from "./bikes.interface";

// Creating a BikeSchema for BikeModel
const bikeSchema = new Schema<TBikes>({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: [0, "Price must be a positive number"] },
    category: {
        type: String,
        enum: ["Mountain", "Road", "Hybrid", "Electric"],
        required: true
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: [0, "Quantity Can't Be Lower Than 0"] },
    inStock: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false, select: false },
},
    { timestamps: true } // To keep track of createdAt and updatedAt
)

// Removing Deleted Items from response
bikeSchema.pre("find", function (next) {
    this.find({ isDeleted: { $ne: true } })
    next();
})
bikeSchema.pre("findOne", function (next) {
    this.findOne({ isDeleted: { $ne: true } })
    next();
})


// Creating BikeModel
export const BikeModel = model<TBikes>('bikes', bikeSchema);