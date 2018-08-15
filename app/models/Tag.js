const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the schema
const tagSchema = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto: true
    },
    body: {
        type: String
    },
    teas: [{type: Schema.Types.ObjectId, ref: 'Tea'}]
});

// Create a model
const Tag = mongoose.model('tag', tagSchema);

// Export the model
module.exports = Tag;