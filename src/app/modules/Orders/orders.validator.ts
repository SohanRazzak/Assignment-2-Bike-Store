import { z } from 'zod';

export const orderValidator = z.object({
    email: z.string(),
    product: z.string(),
    quantity: z.number().min(1, "Order quantity can't be less than 1!"),
    totalPrice: z.number().min(0, "Total price must be a positive number!")
})