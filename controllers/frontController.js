const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res)=>{
    db.Details.findAll().then(data=>{
        const jsonData = data.map(obj => obj.toJSON())
        const hbsObj = {
            details:jsonData,
            user:req.session.user
        }
        //console.log(jsonData);
        res.render("index",hbsObj)
    })
})

router.get("/login", (req,res)=>{
    res.render("login")
})

router.get("/signup", (req,res)=>{
    res.render("signup")
})

router.get("/add", (req, res) => {
    if(!req.session.user){
        res.redirect("/login")
    } else {
        res.render("/add", {
            user: req.session.user
        })
    }
})



module.exports = router;
