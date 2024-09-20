const express = require("express")
const app=express()
const mongodb = require("./config/db")
const PORT = 4000;
const Routes=require("./routes/routes")

const cors=require("cors")
 
mongodb()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors())


app.use("/",Routes)



app.listen(PORT,()=>{
    console.log("Port is Listening "+PORT)
})




