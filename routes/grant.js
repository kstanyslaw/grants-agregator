const express = require('express');
var router = express.Router();

const Grant = require('../models/grant');

// Get Grants
router.get('/', function(req, res, next) {
    Grant.find()
        .exec(function(err, grants) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                })
            }
            res.status(200).json({
                message: 'Success',
                obj: grants
            })
        })
})

// Find one Grant by id 
router.get('/details/:id', function(req, res, next) {
    Grant.findById(req.params.id, function(err, grant) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            })
        }
        if (!grant) {
            return res.status(500).json({
                title: 'No grants found',
                error: err
            })
        }
        res.status(200).json({
            message: 'Success',
            obj: grant
        })
    })
})

// Save Grant
router.post('/', function(req, res, next) {
    var grant = new Grant({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        url: req.body.url,
        categories: req.body.categories,
        duration: req.body.duration,
    });
    grant.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            })
        }
        res.status(201).json({
            message: 'Saved grant',
            obj: result
        })
    })
})

module.exports = router;