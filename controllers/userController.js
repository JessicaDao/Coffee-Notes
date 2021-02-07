const express = require("express");
const router = express.Router();
const db = require("../models");
const user = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/signup",(req,res)=>{
    db.User.create({
        username: req.body.username,
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
        username:req.body.username
    }
}).then(userData=>{
    if(!userData){
        req.session.destroy(); //resets cookie after failed login
        res.json(404).send("User not found.")
    } else {
        if(bcrypt.compareSync(req.body.password, userData.password)){
            req.session.user={
                id: userData.id,
                username: userData.username
            }
            //authenticate user
            res.json(userData);
        } else {
            req.session.destroy(); //resets cookie after failed login
            res.status(401).send("Incorrect password. Try again.")
        }
    }
    })
})

router.get("/readsessions", (req,res)=>{
    res.json(req.session)
})

// Check if signed in or not
router.get("/secretclub", (req,res)=>{
    if(req.session.user){
        res.send(`Hello, ${req.session.user.username}!`)
    } else {
        res.status(401).send("Please sign in!!")
    }
})

// Destroy = deletes existing cookies
router.get("/logout", (req, res)=>{
    req.session.destroy();
    res.send("Logged out.")
})

module.exports = router;
