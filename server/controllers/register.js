const userschema=require("../models/usersupport")
const mongoose=require("mongoose")
const bcrypt = require('bcrypt');

async function register(req,res){
const {fname, email,password} =await req.body
console.log(req.body)
 if(!fname || !email || !password ){
    res.status(400).send("all field are manitory")
 }else{
    const emailverified = await userschema.findOne({email:email})
    if(emailverified){
        res.status(400).send("Already registered in this account")
           }else{
const saltRounds=10 
     const salts=await bcrypt.genSalt(saltRounds)
        
        const passwordhashing=await bcrypt.hash(password, salts)
          
            // Store hash in your password DB.
        const user =userschema.create({
            name:fname,
            email:email,
          password:passwordhashing,
           
        })

        if(user){
            res.status(200).send("Register Sucessfully")
            console.log("Submitted Success")
        }else{
            res.status(400)
           
        }
    }
 }
}

module.exports=register

