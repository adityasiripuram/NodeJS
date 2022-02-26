const fs=require("fs");
const http = require("http");

fs.writeFile("index.html","<h1 style='color:aqua;text-align:center'>Hello world</h1>",err =>{
    console.log(err);
})
const Myserver = http.createServer((req,res)=>{
    fs.readFile("index.html",{encoding:"utf-8"},(err,data)=>{
            res.end(data)
        })
})
Myserver.listen(3000,()=>{
    console.log("Server is Running");
})