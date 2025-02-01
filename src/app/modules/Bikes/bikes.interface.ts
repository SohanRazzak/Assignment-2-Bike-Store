// Defining and exporting Bikes Interface/Type
export type TBikes = {
    name: string;
    brand: string;
    price: number;
    category: "Mountain" | "Road" | "Hybrid" | "Electric";
    description: string;
    quantity: number;
    inStock: boolean;
    isDeleted: boolean
}