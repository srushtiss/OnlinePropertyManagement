const express = require('express');

const Property = require('../models/property.model');
const Reservation = require('../models/reservation');
const jwt = require('../config/jwt');

const router = express.Router();

// Get Properties
router.get('/getProperty', (req, res, next) => {
    Property.find()
    .then(Property => {
        return (!Property) ? res.status(404).send({ error: 'No Properties Found' })
            : res.status(200).send(Property);
    })
    .catch(err => res.status(500).send({ 
        error: err.message 
    }));
});

// Get specific property
router.get('/getProperty/:id', (req, res, next) => {
    const PropertyId = req.params.id;
    Property.findOne({ _id: PropertyId })
    .then(property => res.status(200).send({ 
        property 
    }))
    .catch(err => res.status(404).send({ 
        error: err.message 
    }));
});

// Get reservation
router.get('/getReservations', jwt.validateToken, (req, res, next) => {
    const userId = req.session.userId;
    Reservation.find({ user: userId }, { user: false, _id: false, __v: false })
    .then(result => {
        res.status(200).send({
            message: result
        });
    })
    .catch(err => {
        res.status(400).send({
            error: err.message
        });
    });
});

// Delete property.
router.delete('/deleteProperty/:id', jwt.validateToken, (req, res, next) => {
    const userId = req.session.userId;
    const PropertyId = req.params.id;
    Property.findOne({ _id: PropertyId })
    .then(PropertyToDelete => {
        if (PropertyToDelete.user.toString() !== userId)
            return res.status(403).send({
                error: "Unauthorized access"
            });
        Property.deleteOne({ _id: PropertyId })
        .then(result => {
            return (result.n === 0) ? res.status(404).send({ error: 'Property does not exist' })
                : res.status(200).send({ message: 'Property deleted' });
        })
        .catch(err => res.status(400).send({ 
            error: err.message 
        }));
    })
    .catch(err => res.status(400).send({ 
        error: err.message 
    }));
});

// Delete user.
router.delete('/deleteUser', jwt.validateToken, (req, res, next) => {
    const userId = req.session.userId;
    User.deleteOne({ _id: userId })
    .then(result => {
        return (result.n === 0) ? res.status(404).send({ error: 'User does not exist' })
            : res.status(200).send({ message: 'User deleted' });
    })
    .catch(err => res.status(400).send({ 
        error: err.message 
    }));
});

router.patch('/updateProperty/:id', jwt.validateToken, (req, res, next) => {
    const userId = req.session.userId;
    const updatedProperty = req.body.property;
    const PropertyId = req.params.id;
    Property.findOne({ _id: PropertyId })
    .then(PropertyToUpdate => {
        if (PropertyToUpdate.user.toString() !== userId)
            return res.status(403).send({
                error: "Unauthorized access"
            });
        Property.updateOne({ _id: PropertyId }, { $set: updatedProperty })
        .then(result => {
            return (result.n === 0) ? res.status(404).send({ error: 'Property does not exist' })
                : res.status(200).send({ message: 'Property updated' });
        })
        .catch(err => res.status(400).send({ 
            error: err.message 
        }));
    })
    .catch(err => res.status(400).send({ 
        error: err.message 
    }));
});

module.exports = router;
