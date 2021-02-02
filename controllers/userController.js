const express = require("express");
const router = express.Router();
const db = require('./models');

router.post("/register",(req,res)=>(
    db.User.create({
        email: req.body.email,
        password: req.body.password
    }).then(data=>{
    res.json(data);
    }).catch(err=>{
        res.status
    })
))

module.exports = router;

