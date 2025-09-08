const mongoose = require("mongoose")

const URLModel = new mongoose.Schema({
    url:{
        type:String,
        require:true
    },
    validity:{ 
        type:Number,
        default: 30
    },
    shortcode:{
        type:String,
        unique: true
    },
    expiry: {
        type: Date,
        default: function() {
            if(this.validity){
                return new Date(Date.now() + this.validity*60000);
            }
        }
    },
    noOfClicks:{
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    shortendUrl: {
        type: String,
    }
})

const URL = mongoose.model("URL",URLModel);

module.exports = URL;