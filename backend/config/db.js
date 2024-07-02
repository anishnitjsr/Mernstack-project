import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://kumaranish2553:Anish5876@cluster0.rhpr1wf.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


