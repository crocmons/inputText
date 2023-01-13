import RandomNumber from "../models/RandomNumber.js";


export const postNumbers = (req,res)=>{
    try{

        const textInput = req.body.textNumber;

        const random = new RandomNumber({
            name: textInput
          });
            random.save();
            res.status(200).send(`<h1>Your Name is ${textInput} </h1>`);
           

    }catch(err){
     res.status(404).json({ message: err.message });
    }
}

