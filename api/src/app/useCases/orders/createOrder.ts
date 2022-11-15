import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function createOrder(req: Request, res: Response) {
    const bodyOrder = req.body;
    const order = await Order.create(bodyOrder);

    res.status(200).json(order);
};