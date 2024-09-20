const express= require("express")
const AdminPanel=require("../models/AdminPanel")

async function DeletePanel (req,res){
    console.log(req.params.id)
    const data= await AdminPanel.findByIdAndDelete(req.params.id)
}
module.exports=DeletePanel