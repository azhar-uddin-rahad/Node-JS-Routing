const express = require("express");
const todoSchema = require("../../Model/userModel");
const route = express.Router();
const secureApi =require('../../midleware/secureApi')
route.get("/login", (req, res) => {
  res.send("welcome to azhar route");
});
route.post("/create-user", (req, res) => {
  const { name, age } = req.body;
  let userInfo = new todoSchema({
    name: name,
    age: age,
  });
  userInfo.save();
  res.send(userInfo);
});

route.get('/get-users',secureApi, async (req,res)=>{
   const data= await todoSchema.find();
   res.send(data)
})

module.exports = route;
