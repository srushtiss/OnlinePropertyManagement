const router=require('express').Router()
const Property=require('../models/property.model')
const multer=require('multer')
const upload=multer({dest:'uploads/'})

router.route('/').get((req, res) => {
    Property.find()
        .then(properties => res.json(properties))
        .catch((err) => res.status(400).json('Error ' + err))
})

router.route('/add').post((req, res) => {
    console.log(JSON.stringify(req.fields))

    const email=req.body.email
    const title=req.body.title
    const city=req.body.city
    const category=req.body.category
    const cleaning_fee=Number(req.body.cleaning_fee)
    const service_fee=Number(req.body.service_fee)
    const amenities=req.body.amenities
    const bedrooms=Number(req.body.bedrooms)
    const img=req.file
    const nightly_fee=Number(req.body.nightly_fee)
    const description=req.body.description
    const deleted = req.body.deleted

    const newProperty=new Property({
        title,city,category,cleaning_fee,service_fee,amenities,bedrooms,img,nightly_fee,description, deleted
    })
    newProperty.save()
        .then(() => res.json('New property added'))
        .catch((err) => res.status(400).json(err))
})

router.route('/:id').get((req, res) => {
    Property.findById(req.params.id)
        .then(properties => res.json(properties))
        .catch((err) => res.status(400).json('Error' + err))
})

// Fetch user based on email
router.post('/getUserProperty', (req, res, next) => {
    Property.findOne({ email: req.body.email })
        .then(properties => res.json(properties))
        .catch((err) => res.status(400).json('Error' + err))

});


router.route('/update/:id').post((req, res) => {
    Property.findById(req.params.id)
        .then(property => {
            property.title = req.body.title
            property.city = req.body.city
            property.category = req.body.category
            property.cleaning_fee = Number(req.body.cleaning_fee)
            property.service_fee = Number(req.body.service_fee)
            property.amenities = req.body.amenities
            property.bedrooms = Number(req.body.bedrooms)
            property.img = req.body.img
            property.nightly_fee = Number(req.body.nightly_fee)
            property.description = req.body.description
            property.deleted = req.body.deleted

            property.save()
                .then(() => res.json('Property updated'))
                .catch((err) => res.status(400).json('Error:' + err))
        })
})

router.route('/:id').delete((req, res) => {
    Property.findByIdAndDelete(req.params.id)
        .then(() => res.json('Property Updated'))
        .catch((err) => res.status(400).json('Error' + err))
})
module.exports = router