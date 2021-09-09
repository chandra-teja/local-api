//const Joi = require('joi');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const PostCard = require('../Models/Postcard.js');


//Load all Posts
router.get('/', async (req,res)=>{
    try {
        const postCards = await PostCard.find().sort({date: -1});
    res.send(postCards);
    }
    catch(err){
        res.send(err.message);
    }
});

// //Load one Post
router.get('/:id',async(req,res)=>{
   try{
    const filPost = await PostCard.findById(req.params.id);
    res.send(filPost);
   } 
   catch(err){
       res.send(err.message);
   }
    
});

//Add one Post
router.post('/',async (req,res)=>{
    
    const newPost = new PostCard({
        title: req.body.title,
        content: req.body.content,
        date : req.body.date,
        category: req.body.category,
    });
    // const validation = validatePost(newPost);
    // if(validation.error){
    //     return res.status(400).send(error.message);
    // }
    try{
        const newpost = await newPost.save();
        res.status(200).send(newpost);
    }
    catch(err){
        res.status(400).send(err.message);
        console.log('error',err.message);
    }
});

//Delete Post
router.delete('/:id' ,async (req,res)=>{
    try{
        await PostCard.findById(req.params.id).remove();
        res.status(200).send({message:'deleted'});
       } 
       catch(err){
           res.send(err.message);
       }

});

// function validatePost(newPost){
//     const schema ={
//         title: Joi.string().min(5).max(255).required(true),
//         content: Joi.string().min(5).max(255).required(true),
//         category:Joi.string().min(5).max(20).required(true),
//         date : Joi.date().required(true)
//     }
//     return Joi.validate(newPost,schema);
// }

module.exports = router;