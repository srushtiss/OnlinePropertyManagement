const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/user');


const router = express.Router();

// Register
router.post('/register', (req, res, next) => {
    console.log(req.body)

    const email = req.body.email
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const phone = req.body.phone


    const newUser = new User({
        firstName, lastName, email, password, phone
    })

    newUser.save()
        .then(() => res.json('New property added'))
        .catch((err) => res.status(400).json(err))

}
);

// Login
router.post('/login', (req, res, next) => {
    let loginUser = req.body;
    User.findOne({ email: loginUser.email })
        .then(user => {
            if (!user)
                return res.status(401).send({
                    error: 'Authentication failed'
                });
            else {
                // bcrypt.compare(loginUser.password, user.password, (err, result) => {
                //     if (err || !result)
                //         return res.status(401).send({ 
                //             error: 'Authentication failed' 
                //         });
                //     else {
                //         const token = jwt.createToken({ 
                //             userId: user._id
                //         });
                //         return res.status(200).send({ 
                //             message: 'Authentication successful',
                //             token: token
                //         });
                //     }
                // });

                if (loginUser.password === user.password) {
                    return res.status(200).send({
                        message: 'Authentication successful',
                    });

                }
                else {
                    return res.status(401).send({
                        error: 'Authentication failed'
                    });
                }
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