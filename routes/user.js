const express = require('express');
var router = express.Router();

const User = require('../models/user');

// Login User
router.post('/login', function(req, res, next) {
    User.findOne({ email: req.body.email }, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: "An error occured",
                error: err
            })
        }
        if (!user) {
            return res.status(401).json({
                title: "No user found",
                error: { message: "User could not be found" }
            })
        }
        if (req.body.password != user.password) {
            return res.status(401).json({
                title: "login failed",
                error: { message: "Invalid password" }
            })
        }
        var token = { user: "logged in" }; // Need encryption
        res.status(200).json({
            message: "Succesfully logged in",
            token: token
        })
    })
})

// Singup User
router.post('/', function(req, res, next) {
    var user = new User({
        email: req.body.email,
        password: req.body.password
    });
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: "User didn't singup!",
                error: err
            })
        }
        res.status(201).json({
            message: 'User singup',
            obj: result
        })
    })
})

// Check Email
router.post('/check-email', function(req, res, next) {
    User.findOne({ email: req.body.email }, function(err, email) {
        if (err) {
            return res.status(500).json({
                title: "An Error Occured",
                error: err
            })
        }
        if (email) {
            return res.status(401).json({
                title: "Email has been occupied",
                error: { message: "Somebody has token this email" }
            })
        }
        res.status(200).json({
            title: "Email is free",
            message: "You can SingUp with this email"
        })
    })
})

module.exports = router;