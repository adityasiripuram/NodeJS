const express= require('express');
const dotenv=require('dotenv')
const morgan=require('morgan')
const bodyparser=require('body-parser')
const path=require('path')

const app= express();
dotenv.config({path:`config.env`})
const PORT=process.env.PORT||4040

//log
app.use(morgan('tiny'))
//mongoDB connection
const connectDB=require('./Server/database/connection')
connectDB();
//parse
app.use(bodyparser.urlencoded({extended:true}))

//view-engine
app.set("view engine","ejs")
// app.set("views",path.resolve(__dirname,"vie"))

//loading assets
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/images',express.static(path.resolve(__dirname,'assets/images')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))


//load routers
app.use('/',require('./Server/routes/router'))

app.listen(PORT,()=>{console.log(`Server is listening ${PORT}`)})