const express = require("express");
const router = express.Router();
const db = require("../models");
const user = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/register",(req,res)=>{
    db.User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
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
            req.session.user={
                id: userData.id,
                firstname: userData.firstname
            }
            //authenticate user
            res.json(userData);
        } else {
            res.status(401).send("Incorrect password. Try again.")
        }
    }
    })
})

router.get("/readsessions", (req,res)=>{
    res.json(req.session)
})

router.get("/secretclub", (req,res)=>{
    if(req.session.user){
        res.send("Hello, ${req.session.user.firstname}!")
    } else {
        res.status(401).send("Please sign in!!")
    }
})
module.exports = router;

