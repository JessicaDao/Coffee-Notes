const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res)=>{
    db.Details.findAll().then(data=>{
        const jsonData = data.map(obj => obj.toJSON())
        const hbsObj = {
            details:jsonData 
        }
        console.log(jsonData);
        res.render("index",hbsObj)
    })
})

router.get("/login", (req,res)=>{
    res.render("login")
})


module.exports = router;
