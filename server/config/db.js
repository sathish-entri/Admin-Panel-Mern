const mongoose =require("mongoose")

async function mangodb(){
    try{
        await mongoose.connect("mongodb://sathishchandrasekar:sathishchandrasekar@ac-acff66f-shard-00-00.fdset1a.mongodb.net:27017,ac-acff66f-shard-00-01.fdset1a.mongodb.net:27017,ac-acff66f-shard-00-02.fdset1a.mongodb.net:27017/?ssl=true&replicaSet=atlas-49p7pw-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0/e-learning")
        console.log("Mongodb Connected Succesfully")
        }catch(e){
         console.log(e)
        } 
}
module.exports=mangodb