import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

export const userSchema = new Schema<IUser>({
    id: {
        type: String,
        unique: true,
        required: true
    },
    name: { // notice that. we can also declear a type like this
        type: String,
        required: true
    },
    age: Number, // notice that. we can declear a type like this
    gender: {
        type: String,
        enum: [
            "Male",
            "Female"
        ],
        required: true
    }
})

export const User = model<IUser>("user", userSchema);