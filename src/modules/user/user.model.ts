import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModels } from "./user.interface";

export const userSchema = new Schema<IUser,UserModels , IUserMethods>({
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
userSchema.method("fullName", function fullName(){
    return this.name+ " " + this.age
})

userSchema.static('getAbdur', async function getAbdur() {
    const a_rahim = await this.find({name: "Islam Uddi"})
    return a_rahim
})

export const User = model<IUser, UserModels>("user", userSchema);

type UserModel = Model<IUser, {}, IUserMethods>;