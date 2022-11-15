import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function createCategory(req: Request, res: Response) {
    const { name, icon } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Preencha o nome da categoria' });
    }
    if (!icon) {
        return res.status(400).json({ message: 'Preencha o icone da categoria' });
    }
    const category = await Category.create({ name, icon });

    res.status(201).json(category);
};