const express = require('express');
const bcrypt = require('bcrypt');

const Host = require('../models/host');


const router = express.Router();

// Register
router.post('/register', (req, res, next) => {
    console.log(req.body)

    const email = req.body.email
    const passHash = req.body.passHash
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const phone = req.body.phone


    const newHost = new Host({
        firstName, lastName, email, passHash, phone
    })

    newHost.save()
        .then(() => res.json('New Host added'))
        .catch((err) => res.status(400).json(err))

}
);

// Login
router.post('/login', (req, res, next) => {
    console.log(req.body)
    let loginHost = req.body;
    Host.findOne({ email: loginHost.email })
        .then(Host => {
            if (!Host)
                return res.status(401).send({
                    error: 'Authentication failed'
                });
            else {
                if (loginHost.passHash === Host.passHash) {
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

// Fetch Host based on email
router.post('/getHost', (req, res, next) => {
    const HostEmail = req.body.email;
    Host.findOne({ email: HostEmail })
        .then(result => {
            (result) ? res.status(200).send({ message: "Good" }) :
                res.status(400).send({ error: "Email does not exist" });
        })
        .catch(err => res.status(400).send({
            error: err.message
        }));
});

module.exports = router;