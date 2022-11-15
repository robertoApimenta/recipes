import { Request, Response } from "express";
import { Product } from "../../models/Products";

export async function listProducts(req: Request, res: Response) {
    const products = await Product.find();

    res.status(200).json(products);
};