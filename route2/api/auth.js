const express=require("express");
const route=express.Router();
route.get('/login',(req,res)=>{
    res.send("Hello Welcome Home")
})

module.exports=route;