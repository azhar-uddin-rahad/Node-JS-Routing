const express= require("express");
const route=express.Router();
const authRoute=require("./auth");
const product=require("./product")
route.use('/auth',authRoute);
route.use('/product',product);

module.exports=route;