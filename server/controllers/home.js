const express=require('express')
const AdminPanel=require("../models/AdminPanel")

async function home(req,res) {
    const data= await AdminPanel.find()
    
    res.status(200).send(data)
}
module.exports=home