const express= require('express')
const AdminPanel=require("../models/AdminPanel")

async function uploadDta(req,res) {
    console.log(req.body)
    const{name,email,mobile,degsination,gender,course}=req.body
    console.log(req.file)
    if(!name && !email && !mobile && !degsination && !gender && !course && !req.file){
        res.json({
            alert:"all fields are manitory"
        })
    }else{
        if(!name ||!email || !mobile || !degsination ||!gender ||!course ||!req.file){
            var error={}
            if(!name){
                error.name="Name is required"
              }
              if(!email){
                error.email="Email is required"
              }
              if(!mobile){
                error.mobile="mobile number is required"
              }
              if(!degsination){
                error.degsination="desgination is required"
              }
              if(!gender){
                error.gender="gender is required"
              }                         
              if(!course){
                error.course="course is required"
              }   
              if(!req.file){
                error.course="image is manitory"
              }   
              res.json({
                error:error
              })    
            //   console.log(error)             
           }else{
          const paneldata= await AdminPanel.findOne({email:email})
          console.log(paneldata)
          if(paneldata){
            var error={}
              error.email="Email is already registered"
              res.json({
                error:error
              })  
          }else{
            const storeddata=AdminPanel.create({
              name:name,
              email:email,
              mobile:mobile,
              degsination:degsination,
              gender:gender,
              course:course,
              image:req.file.path,
              date:Date.now()
          })
          if(storeddata){
              res.status(200).json({
                  alert:"submitted succesfully"
               })
          }
          }
           
           }
           
    }
   
// console.log(req.body)
}

module.exports=uploadDta