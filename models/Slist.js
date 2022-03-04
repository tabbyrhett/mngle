const { Schema, model } = require('mongoose') // obj Schema func model

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = model('Slist', schema)