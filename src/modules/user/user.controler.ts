import { Request, Response } from "express";
import { createUsertoDB } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
    const user = await createUsertoDB()
    res.status(200).json({
        status: "success",
        data: user
    });
}

    // Insert data in mongoDB
    // steps 
    /* 
    step1. Interface
    step2. Schema
    step3. Model
    step4. Connect to MongoDB 
    */