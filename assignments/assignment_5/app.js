const express = require("express");
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

const loginRoutes = require("./routes/login");
const postRoutes = require("./routes/posts");
const userRoutes=require("./routes/user");
const SECRET = "RESTAPI";

const app = express();
app.set('views', "./views")
app.set('view engine', "ejs")
mongoose.connect('mongodb://localhost:27017/assignment_5');


app.use("/posts", (req, res, next) =>{
    var token = req.headers.authorization.split("test ")[1];

    if(!token){
        return res.status(401).json({
            status: "failed",
            message: "Token is missing"
        })
    }
    // verify the token
    jwt.verify(token, SECRET, async function(err, decoded) {
        if(err){
            return res.status(401).json({
                status:"failed",
                message: "Invalid token"
            })
        }
        req.user = decoded.data;
        next();
    });
});

app.use("/", loginRoutes);
app.use("/", postRoutes);
app.use('/users',userRoutes)


app.listen(3000, () => console.log("server is listening"));