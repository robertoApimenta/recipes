export interface Order {
    _id: string;
    table: string;
    status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
    products: {
        _id: string;
        quantity: Number;
        product: {
            name: string;
            imagePath: string;
            price: Number;
        };
    }[]
}