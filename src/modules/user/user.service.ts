import { User } from "./user.model";

export const createUsertoDB = async() =>{

    const user = new User({
        id: "poih",
        name: "Papia",
        gender: "Female"
    })


    await user.save();
    return user
}