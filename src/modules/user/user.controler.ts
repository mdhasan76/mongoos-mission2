import { NextFunction, Request, Response } from "express";
import { createUsertoDB, getUsersFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
    const data = req.body;
    const user = await createUsertoDB(data)
    res.status(200).json({
        status: "success",
        data: user
    });
}



export const getUsers = async(req: Request, res:Response, next: NextFunction) =>{
    const users = await getUsersFromDB();
    res.status(200).json({
        status: "success",
        data: users
    })
    // return users
}