const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
    let newUser = req.body.user;
    bcrypt.hash(newUser.password, 10, (err, hash) => {
        if (err)
            return res.status(500).send({ 
                message: 'Internal server Error' 
            });
        else {
            newUser.password = hash;
            const user = new User(newUser);
            user.save()
            .then(() => res.status(201).send({ 
                id: user._id 
            }))
            .catch(err => res.status(417).send({ 
                error: err.message 
            }));
        }
    });
});

// Login
router.post('/login', (req, res, next) => {
    let loginUser = req.body.user;
    User.findOne({ email: loginUser.email })
    .then(user => {
        if (!user)
            return res.status(401).send({ 
                error: 'Authentication failed' 
            });
        else {
            bcrypt.compare(loginUser.password, user.password, (err, result) => {
                if (err || !result)
                    return res.status(401).send({ 
                        error: 'Authentication failed' 
                    });
                else {
                    const token = jwt.createToken({ 
                        userId: user._id
                    });
                    return res.status(200).send({ 
                        message: 'Authentication successful',
                        token: token
                    });
                }
            });
        }
    })
    .catch(err => res.status(500).send({ 
        error: err.message 
    }));
});

// Fetch user based on email
router.post('/getUser', (req, res, next) => {
    const userEmail = req.body.email;
    User.findOne({ email: userEmail })
    .then(result => {
        (result) ? res.status(200).send({ message: "Good" }) :
            res.status(400).send({ error: "Email does not exist" });
    })
    .catch(err => res.status(400).send({
        error: err.message
    }));
});

module.exports = router;