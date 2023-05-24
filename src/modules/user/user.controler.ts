import { NextFunction, Request, Response } from "express";
import { createUsertoDB, getAbdurRahimFromDB, getUsersFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
    const data = req.body;
    const user = await createUsertoDB(data)
    res.status(200).json({
        status: "success",
        data: user
    });
}

export const getAbdurRahim = async (req: Request, res: Response) =>{
    const a_rahim = await getAbdurRahimFromDB()
    return res.status(200).json({
        status: "Sofol babe a.rahimre paiso",
        data: a_rahim
    })
}


export const getUsers = async(req: Request, res:Response, next: NextFunction) =>{
    const users = await getUsersFromDB();
    res.status(200).json({
        status: "success",
        data: users
    })
    // return users
}