const express = require("express")
const Routes =express.Router()
const register = require("../controllers/register")
const login = require("../controllers/login")
const uploadDta=require("../controllers/uploadDta")
const multer= require("multer")
const home = require("../controllers/home")
const DeletePanel=require("../controllers/DeletePanel")
const fetchpanel= require("../controllers/fetchpanel")
const EditPanel=require("../controllers/EditPanel")

// authandicate.............................................................................
    Routes.post("/register",register)
    Routes.post("/login",login)
    Routes.get("/home",home)
    Routes.post("/updatePanel/:id",DeletePanel)
    Routes.get("/fetchpanel/:id",fetchpanel)
   


   

    let Storage = multer.diskStorage({
        destination:(req,res,cb)=>{
            cb(null,"./uploads")
        },
        filename:(req,file,cb)=>{
            const uniqueName =`${Date.now()}-${file.originalname}`;
            cb(null,uniqueName)
        }
        })
        
        let upload =multer({storage :Storage})
        
        Routes.post("/upload",upload.single("image"),uploadDta) 
        Routes.post("/editpanel/:id",upload.single("image"),EditPanel)
module.exports=Routes