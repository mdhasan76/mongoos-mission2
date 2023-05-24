import express from "express"
import { createUser, getAbdurRahim, getUsers } from "./user.controler";
// import { getUserFromDB } from "./user.service";
const router = express.Router();

router.get("/", getUsers);
router.post("/create-user", createUser)
router.get("/abdur-rahim", getAbdurRahim)
export default router;