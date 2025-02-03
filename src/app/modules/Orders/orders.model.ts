import { model, Schema } from "mongoose";
import { TOrder } from "./orders.interface";


const orderSchema = new Schema<TOrder>({
    email: { type: String, require: true },
    product: { type: String, require: true },
    quantity: { type: Number, require: true, min: [1, "Minimum order quantity is 1"] },
    totalPrice: { type: Number, require: true },
},
    { timestamps: true }
)

// Creating Order Model
export const OrderModel = model<TOrder>('orders', orderSchema);