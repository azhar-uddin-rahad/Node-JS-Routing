const secureApi=(req,res,next)=>{
    console.log(req.headers);
    if(req.headers.authorization === '123azhar'){
        next()
    }
    else{
        res.send("unauthorize users")
    }
    
}

module.exports=secureApi