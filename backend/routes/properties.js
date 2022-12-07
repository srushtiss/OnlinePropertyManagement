const router=require('express').Router()
const Property=require('../models/property.model')

router.route('/').get((req,res)=>{
    Property.find()
    .then(properties=>res.json(properties))
    .catch((err)=>res.status(400).json('Error '+err))
})

router.route('/add').post((req,res)=>{
    console.log(JSON.stringify(req.fields))
    const name=req.body.name
    const city=req.body.city
    const type=req.body.type
    const cleaning=Number(req.body.cleaning)
    const service=Number(req.body.service)
    const amenities=req.body.amenities
    const bedrooms=Number(req.body.bedrooms)
    const image=req.body.image
    const price=Number(req.body.price)
    const desc=req.body.desc

    const newProperty=new Property({
        name,city,type,cleaning,service,amenities,bedrooms,image,price,desc
    })

    newProperty.save()
    .then(()=>res.json('New property added'))
    .catch((err)=>res.status(400).json(err))
})

router.route('/:id').get((req,res)=>{
    Property.findById(req.params.id)
    .then(properties=>res.json(properties))
    .catch((err)=>res.status(400).json('Error'+err))
})

router.route('/update/:id').post((req,res)=>{
    Property.findById(req.params.id)
    .then(property=>{
        property.name=req.body.name
        property.city=req.body.city
        property.type=req.body.type
        property.cleaning=Number(req.body.cleaning)
        property.service=Number(req.body.service)
        property.amenities=req.body.amenities
        property.bedrooms=Number(req.body.bedrooms)
        property.image=req.body.image
        property.price=Number(req.body.price)
        property.desc=req.body.desc

        property.save()
        .then(()=>res.json('Property updated'))
        .catch((err)=>res.status(400).json('Error:'+err))
    })
    .catch((err)=>res.status(400).json('Error'+err))
})

router.route('/:id').delete((req,res)=>{
    Property.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Property Deleted'))
    .catch((err)=>res.status(400).json('Error'+err))
})
module.exports=router