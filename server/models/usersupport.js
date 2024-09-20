const mongoose=require("mongoose")

const userdetails=mongoose.Schema({
    name:String,
    imagepath:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
  
})
module.exports=mongoose.model("userDeataistask",userdetails)