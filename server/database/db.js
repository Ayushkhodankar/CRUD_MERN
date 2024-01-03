import { mongoose } from "mongoose";

const connection= async()=>{

const URL='mongodb://localhost:27017';

try {
    await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser: true,
    });
    console.log("Database connected successfully")
} catch (error) {
    console.log("Error while connectiong while db", error)
}
}
export default connection;