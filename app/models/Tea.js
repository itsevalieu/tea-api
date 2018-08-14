const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the schema
const teaSchema = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        minlength: 0,
        maxlength: [250, 'Over max character length of 250']
    },
    benefits: {
        type: [String]
    },
    type: {
        type: String,
        enum: ['White', 'Green', 'Oolong', 'Black', 'Pu-erh', 'Herbal', 'Fruit Blend']
    },
    brew: {
        type: Number
    },
    origin: {
        type: String
    },
    imageUrl: {
        type: String
    },
    handle: {
        type: String
    },
    comments: {
        type: [String],
        index: true
    },
    tags: {
        type: [String],
        index: true
    },
    saved: {
        type: Boolean
    },
});

// Create a model
const Tea = mongoose.model('tea', teaSchema);

// Export the model
module.exports = Tea;