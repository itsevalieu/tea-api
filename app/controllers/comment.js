const Comment = require('../models/Comment.js');

module.exports = {
    getComment: async (req, res, next) => {
        const data = await Comment.find({});
        console.log('got comment');
        res.status(200).json({data});
    },
    postComment: async (req, res, next) => {
        const { 
            body,
            user
        } = req.body;

        //create new document
        const newComment = new Comment({
            body,
            user
        });
        await newComment.save();
        //respond with message
        res.status(200).json({success: 'Successfully added to database!'});
    },
    updateComment: async (req, res, next) => {
        const { 
            body,
            user
        } = req.body;

        const foundComment = await Comment.findByIdAndUpdate({
            _id: req.params.id
        }, { 
            $set: {
                body,
                user
            }
        }, (err) => {
            if(err) return err;
        });
        res.status(200).send({success: 'Successfully updated'});
    },
    deleteComment: async (req, res, next) => {
        const foundComment = await Comment.findByIdAndDelete({_id: req.params.id}); 
        res.status(200).json({success: 'Successfully deleted.'});
    }
}