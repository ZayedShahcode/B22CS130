const URL = require("../model/url")
const Log = require("../../logging_middleware/logging")

const createShortURL = async(req , res)=>{
    try{

        const {url,validity} = req.body;
        let {shortcode} = req.body;
    
        if(!shortcode){
            shortcode = Math.random().toString(36).substring(2,8);
        }
        const exists = await URL.find({shortcode});
        if(exists.length>0){
            shortcode = (Math.random()*shortcode.length).toString(36).substring(2,8);
        }
    
        const shortURL = await URL.create({url,validity,shortcode});
        shortURL.shortendUrl = "http://localhost:5000/"+shortcode;
        await shortURL.save();
        const newURL  = "http://localhost:5000/"+shortcode;
    
     
        res.json({url,newURL});
    }
    catch(err){
        Log("backend","error","controller",err.message);
        res.status(500).json({message: err.message});
    }
}

const accessURL = async(req,res)=>{
    try{
        const {shortcode} = req.params;
        const fullUrl = await URL.findOne({shortcode});
        if(fullUrl.expiry < new Date()){
            URL.deleteOne({shortcode});
            return res.status(404).json({message:"URL has expired"});
        }
        fullUrl.noOfClicks += 1;
        await fullUrl.save();
        res.status(302).redirect(fullUrl.url);
    }
    catch(err){
        Log("backend","error","controller",err.message);
        res.status(500).json({message:err.message});
    }
}

const getURLStatistics = async(req,res)=>{
    try{
        const {shortcode} = req.params;
        console.log(shortcode);
        const url = await URL.findOne({shortcode});
        res.status(200).json({noOfClicks: url.noOfClicks, original: url.url, createdAt: url.createdAt, expiry: url.expiry} );
    }
    catch(err){
        Log("backend","error","controller",err.message);
        res.status(500).json({err});
    }
    
}

const getAllUrls  = async(req,res)=>{
    try{
        const urls = await URL.find({});
        res.status(200).json(urls);
    }
    catch(err){
        Log("backend","error","controller",err.message);
        res.status(500).json({err});
    }
}

module.exports = {createShortURL, accessURL, getURLStatistics,getAllUrls};