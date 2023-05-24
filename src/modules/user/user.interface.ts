import { HydratedDocument, Model } from "mongoose";


export interface IUser {
    id?: string,
    name: string;
    age?: number;
    gender: "Male" | "Female";
}

//statics method
export interface UserModel extends Model<IUser> {
    getAbdurRahim(): IUser;
  }

// instance method
export interface IUserMethods {
    fullName(): string;
  }

export interface UserModels extends Model<IUser, {},IUserMethods> {
    getAbdur(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }