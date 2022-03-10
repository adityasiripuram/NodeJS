const mongoose= require('mongoose')
var schema=new mongoose.Schema({
    name:{ type: String,required:true},
    email:{type:String,required:true,unique:true},
    profession:{type:String,required:true},
    country:{type:String,required:true},
    
    status:{type:String}

})
const Userdb=mongoose.model('userdb',schema);
module.exports=Userdb;