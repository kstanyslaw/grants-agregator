const express = require('express');
var router = express.Router();

const Grant = require('../models/grant');

// Get Grants
router.put('/', function(req, res, next) {
    Grant.find({'geoScale': req.body.geoScale})
        .select('_id name price')
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
        grantor: req.body.grantor,
        url: req.body.url,
        dateStart: req.body.dateStart,
        deadline: req.body.deadline,
        price: req.body.price,
        geoScale: req.body.geoScale,
        grantee: req.body.grantee,
        region: req.body.region,
        city: req.body.city,
        description: req.body.description,
        categories: req.body.categories,
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