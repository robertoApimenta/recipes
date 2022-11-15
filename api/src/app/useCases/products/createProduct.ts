import { Request, Response } from "express";
import { Product } from "../../models/Products";

export async function createProduct(req: Request, res: Response) {
    const imagePath = req.file?.filename;
    const { name, description, price, ingredients, category } = req.body;

    const product = await Product.create({
        name,
        description,
        imagePath,
        price: Number(price),
        category,
        ingredients: JSON.parse(ingredients),
    })

    res.status(201).json(product);
};