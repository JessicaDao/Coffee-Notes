const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res)=>{
    db.notes.findAll().then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json(err);
    })
})

router.post("/", (req, res)=>{
    if(!req.session.user){
        res.status(401).send("Please login.")
    }else {
    db.Details.create({
        coffee_name:req.body.coffee_name,
        producer:req.body.producer,
        coffee_bean:req.body.coffee_bean,
        brew_method:req.body.brew_method,
        taste:req,body,taste,
        rate:req.body.rate,
        price:req.body.price,
        location:req.body.location,
        notes:req.body.notes,
        UserId:req.session.user.id
        })
    }
})

module.exports = router;