const express = require("express");
const router = express.Router();
const db = require("../models");
const user = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/register",(req,res)=>{
    db.User.create({
        email: req.body.email,
        password: req.body.password
    }).then(data=>{
    res.json(data);
    }).catch(err=>{
        res.status(500).json(err);
    })
})

router.post("/login",(req,res)=>{
    db.User.findOne({ //finds user
    where: {
        email:req.body.email
    }
}).then(userData=>{
    res.json(userData)
    if(!userData){
        res.json(404).send("User not found.")
    } else {
        if(bcrypt.compareSync(req.body.password, userData.password)){
            res.json(userData);
        } else {
            res.status(401).send("Incorrect password. Try again.")
        }
    }
    })
})


module.exports = router;

