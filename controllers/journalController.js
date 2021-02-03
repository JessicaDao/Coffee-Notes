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
    db.notes.create({
        notes:req.body.title,
        UserId:req.session.user.id
        })
    }
})

module.exports = router;