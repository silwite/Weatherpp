const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    city:{
        type: String,
        required: true
    },
    
})

const userModel= mongoose.model("data",userSchema)
module.exports= userModel ;