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
        maxlength: [450, 'Over max character length of 450']
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
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag'}],
    saved: {
        type: Boolean
    },
});

// Create a model
const Tea = mongoose.model('tea', teaSchema);

// Export the model
module.exports = Tea;