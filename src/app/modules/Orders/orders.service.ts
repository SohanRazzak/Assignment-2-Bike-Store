import { BikeModel } from "../Bikes/bikes.model";
import { TOrder } from "./orders.interface";
import { OrderModel } from "./orders.model";


// Create new order service
export const newOrderService = async (data: TOrder) => {
    // Check and Reducing Quantity
    const { product: bikeId, quantity } = data;
    const bike = await BikeModel.findById(bikeId);
    if (!bike) {
        // Returning if no Bike matches
        return;
    }
    if (bike.quantity < quantity) {
        // Returns false to controller
        return false;
    }
    bike.quantity -= quantity;
    // if (!bike.quantity) {          ||  inStock Logic handled in
    //     bike.inStock = false;      ||  bikeSchema with pre hook
    // }                              ||  for centralization purpose

    // Updating the product Quantity
    await bike.save();

    // Returning order data to controller
    const result = await OrderModel.create(data)
    return result;
}


// Calculate revenue servie
export const getTotalRevenueService = async () => {
    const result = await OrderModel.aggregate([
        // Grouping to turn into single doc
        {
            $group: {
                _id: null, // taking nonexisting field to re-group into single doc
                totalRevenue: {
                    $sum: "$totalPrice"
                }
            }
        },
        // Projection
        {
            $project: { _id: 0, totalRevenue: 1 }
        }

        // According to requirement
        /*{
            $addFields: { productId: { $toObjectId: '$product' } }
        },
        {
            $lookup: {
                from: 'bikes',
                localField: "productId",
                foreignField: "_id",
                as: "productInfo"
            }
        },
        {
            $group: {
                _id: '',
                totalRevenue: {
                    $sum: {
                        $multiply: ["$quantity", { $first: '$productInfo.price' }]
                    }
                }
            }
        } */
    ])
    return result;
}