const mongoose = require("mongoose")


const connectDB =  (url)=>{
    try{
        return mongoose.connect(url)
    }
    catch(err){
        Log("backend","fatal","db","Cannot Connect to DB");
    }
}

module.exports = connectDB;