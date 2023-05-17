import express, { Application } from "express";
import cors from "cors";
import router from "./modules/user/user.router";
// import userRoute from "./modules/user/user.router"

const app: Application = express();

// express middleware
app.use(cors()); // for comunicate other or external URL 
app.use(express.json()) // this is use for recived the json data in server
app.use(express.urlencoded({ extended: true })) // its use to recive any type of data like json or other 

app.use('/api/v1/user',router)

export default app;
