const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
    },
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property',
    },
    quantity: {
        type: Number,
        min: 1,
    }
});

module.exports = mongoose.model('reservation', reservationSchema);
