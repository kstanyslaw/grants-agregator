const express = require('express');
var router = express.Router();

const User = require('../models/user');

// // Get Grants
// router.get('/', function(req, res, next) {
//   Grant.find()
//     .exec(function(err, grants) {
//       if (err) {
//         return res.status(500).json({
//           title: 'An error occured',
//           error: err
//         })
//       }
//       res.status(200).json({
//         message: 'Success',
//         obj: grants
//       })
//     })
// })

// Save User
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
    User.findOne({email: req.body.email}, function(err, email) {
        if (err) {
            return res.status(500).json({
                title: "An Error Occured",
                error: err
            })
        }
        if (email) {
            return res.status(401).json({
                title: "Email has been occupied",
                error: {message: "Somebody has token this email"}
            })
        }
        res.status(200).json({
            title: "Email is free",
            message: "You can SingUp with this email"
        })
    })
})

module.exports = router;
