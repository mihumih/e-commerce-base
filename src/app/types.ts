export interface Product {
    id: number;
    image: string;
    SKU: number;
    name: string;
    description: string;
    price: number;
}
export interface Order {
    date: Date,
    numberOfProducts: number,
    orderTotal: number,
}