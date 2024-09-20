const express =require("express")
const AdminPanel=require("../models/AdminPanel")

async function fetchpanel(req,res){
   const data = await AdminPanel.findById(req.params.id)
//    console.log(data)
   res.send(data)
}
module.exports=fetchpanel