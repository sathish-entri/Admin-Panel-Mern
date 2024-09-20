const mongoose=require("mongoose")

const AdminPanel=mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    mobile:{
        type:Number,
        required:true
    },
    degsination:String,
    gender:String,
    course:String,
    image:{type:Buffer},
    date:Date
})
module.exports=mongoose.model("AdminPanel",AdminPanel)