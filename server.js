import express from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import cors from "cors"
import mongoose from "mongoose";
import numberRoutes from "./routes/number.js"

dotenv.config();
const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.use(cors());

app.use("/randomNumber",numberRoutes);


// mongoose setup
const PORT = process.env.PORT || 8080;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    app.listen(PORT,()=>{
        console.log("Server running")
    })})
    .catch((err)=>
    console.log(err)
)