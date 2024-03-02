const express=require("express");
const { model } = require("mongoose");
const route=express.Router();
route.get('/product-details',(req,res)=>{
    res.send("Welcome to The Product Details Api")
})
module.exports=route;