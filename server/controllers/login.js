
const express=require("express")
const userschema=require("../models/usersupport")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require("dotenv").config();

async function login(req,res){
const {email,password}= await req.body
  if(!email || !password){
    res.status(400).json({message:"All filed manitory"})
  
   }else{
    var emailverified = await userschema.findOne({email:email})
   
   if(!emailverified){
    res.status(400).json({email:"Email Invalid"})
    console.log("Invalid Email")
   }else{
    const comparepassword= await bcrypt.compare(password,emailverified.password)

    if(comparepassword){
        res.status(200).json({
          token:tokens(emailverified.id),
        })
        console.log("Login Success")
    }else{
        console.log("Login Failed")
        res.status(400).json({password:"Password incorrect"})
    }
   }
  }
}

function tokens(id){
  var token = jwt.sign({ id}, "process.env.SECRET-KEY");
  console.log(token)
  return token
}

module.exports=login
