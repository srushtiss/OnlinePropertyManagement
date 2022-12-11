const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    cleaning_fee: {
        type: Number,
        required: true,
    },
    service_fee: {
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
    img: {
        type: String,
    },
    nightly_fee: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    }
});

module.exports = mongoose.model('property', propertySchema);