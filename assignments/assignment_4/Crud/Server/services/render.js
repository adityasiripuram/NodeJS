const axios=require('axios');
const { response } = require('express');

exports.homeRoutes=(req,res)=>{
    axios.get('http://localhost:3000/api/users').then(function(res){    
    res.render(`index`,{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.AddUser=(req,res)=>{
    res.render(`form`)
}

exports.UpdateUser=(req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.params.id}})
    .then(function(udata)
    {
        res.render(`update_user`,{user:udata.data})
    })
    .catch(err=>{
        res.send(err)
    })
}