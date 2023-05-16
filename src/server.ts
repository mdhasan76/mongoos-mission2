
import mongoose from "mongoose";
const port = 5000;
import app from "./app";

monsaiseDisi().catch(err => console.log(err));

async function monsaiseDisi() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test-mongoose');
    console.log("Server is connected succesfully");


    app.listen(port, () => {
      console.log(`Example app listening on ports ${port}`)
    })
  }
  catch (err) {
    console.log("Not connected");
    console.log(err);
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

