const express =require("express")
const AdminPanel=require("../models/AdminPanel")

async function EditPanel(req,res){
console.log(req.params.id)
console.log(req.body)
const data= await AdminPanel.findById(req.params.id)
const paneldata= await AdminPanel.find({email:{$ne:data.email}},{email:1,_id:0})
console.log(data)
// console.log(paneldata)
const mapvalue=paneldata.filter((res)=>{
    return res.email==req.body.email
})
const finalvalue=mapvalue.length==0?"true":"false"
console.log(mapvalue)
if(mapvalue.length===1){
    console.log("already exists")
    var error={}
        error.email="Email is already registered"
        res.json({
          error:error
        })
     }else{
        console.log("final else")
        const datas= await AdminPanel.findByIdAndUpdate(req.params.id,req.body)
await res.status(200).json({
    datas:datas
})
     }

    }
module.exports=EditPanel 