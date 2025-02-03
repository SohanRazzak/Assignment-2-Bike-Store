import { z } from 'zod';

export const bikeValidator = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    brand: z.string(),
    price: z.number().min(0, "Price must be a positive number"),
    category: z.enum(["Mountain", "Road", "Hybrid", "Electric"], { message: "Invalid Category!" }),
    description: z.string(),
    quantity: z.number().int().min(0, "Quantity must be at least 1"),
    inStock: z.boolean(),
    isDeleted: z.boolean().optional()
})