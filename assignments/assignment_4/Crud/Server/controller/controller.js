var Userdb=require('../model/model')

//create and saving new user
exports.create=(req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Fields cannot be empty"});
        return;
    }

    //new user
    const user= new Userdb({
        name:req.body.name,
        email:req.body.email,
        profession:req.body.profession,
        city:req.body.city,
        status:req.body.status
    })

    //save user in DB
    user
       .save(user)
       .then(data=>{
        //    res.send(data)
        res.redirect('/')
    })
       .catch(err=>{
           res.send(500).send({
            message:err.message || "Some error occured in create op"
           });
       });


}

//return all users and for single users
exports.find=(req,res)=>{
    if(req.query.id){
        const id=req.query.id
        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.send(404).send({message :"User not found with" +`id`})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error with this"+id})
        })

    }else{
        Userdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Some error occured in finding op"});
        });

    }
    
}

//update
exports.update=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Fields cannot be empty"});
        return;
    }
    const id=req.params.id;
    Userdb.findByIdAndUpdate(id,req.body)
    .then(data=>{
        if(!data){
        res.status(404).send({message:`Cannot update ${id}`})
            }else{
                res.send(data)
            }
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "Some error occured"})
    })

}

//delete
exports.delete=(req,res)=>{
    const id=req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
        res.status(404).send({message:`Cannot delete ${id}`})
            }else{
                res.send({message:"User was deleted"})
            }
    })
    .catch(err=>{
        res.status(500).send({message:`Some error occured while deleting ${id}`});
    });
}