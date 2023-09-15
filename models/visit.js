const mongoose = require('mongoose')

const visitSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    bmi: {
        type: Number
    },
    generalHealth: {
        type: String,
        enum: ['Good', 'Poor']
    },
    onDiet: {
        type: Boolean
    },
    drugs: {
        type: Boolean
    },
    comments: {
        type: String
    }

})

const Visit = mongoose.model('Visit', visitSchema);

module.exports = Visit