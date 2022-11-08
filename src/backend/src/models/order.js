const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'location',
    },
    quantity: {
        type: Number,
        min: 1,
    }
});

module.exports = mongoose.model('order', orderSchema);