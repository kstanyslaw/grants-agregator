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

module.exports = router;
