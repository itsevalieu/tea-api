const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the schema
const commentSchema = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto: true
    },
    body: {
        type: String,
        minlength: 0,
        maxlength: [250, 'Over max character length of 250']
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
});

// Create a model
const Comment = mongoose.model('comment', commentSchema);

// Export the model
module.exports = Comment;