const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    cleaning: {
        type: Number,
        required: true,
    },
    service: {
        type: Number,
        required: true,
    },
    amenities: {
        type: [String],
        required: true,
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
    },
    price: {
        type: [Number],
        required: true,
    },
    desc: {
        type: String,
    }
});

module.exports = mongoose.model('', propertySchema);