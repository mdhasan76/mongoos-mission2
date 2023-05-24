import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUsertoDB = async(payload:IUser):Promise<IUser> =>{

    const user = new User(payload);
    console.log(user.fullName());
    await user.save();
    return user
}

export const  getAbdurRahimFromDB = async () =>{
    const a_rahim = await User.getAbdur()
    return a_rahim
}

export const getUsersFromDB = async ():Promise<IUser[]> =>{
    const users = await User.find({});
    return users
}