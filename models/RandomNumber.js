import mongoose from "mongoose";

const RandomSchema = new mongoose.Schema({
    name:String
},
{ timestamps: true }
)

const RandomNumber = mongoose.model("RandomNumber",RandomSchema);

export default RandomNumber;