import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
import { IUser } from "./modules/user/user.interface";
import { User } from "./modules/user/user.model";

const app: Application = express();

// express middleware
app.use(cors()); // for comunicate other or external URL 
app.use(express.json()) // this is use for recived the json data in server
app.use(express.urlencoded({ extended: true })) // its use to recive any type of data like json or other 

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');

    // Insert data in mongoDB
    // steps 
    /* 
    step1. Interface
    step2. Schema
    step3. Model
    step4. Connect to MongoDB 
    */


    const createUsertoDB = async() =>{

        const user = new User({
            id: "poihfaksd325",
            name: "Hasan",
            gender: "Male"
        })
    
    
        await user.save();
    }
    createUsertoDB()
})

export default app