const Tag = require('../models/Tag.js');

module.exports = {
    getTag: async (req, res, next) => {
        const data = await Tag.find({});
        console.log('got tag');
        res.status(200).json({data});
    },
    postTag: async (req, res, next) => {
        const { 
            body,
            teas
        } = req.body;

        //create new document
        const newTag = new Tag({
            body,
            teas
        });
        await newTag.save();
        //respond with message
        res.status(200).json({success: 'Successfully added to database!'});
    },
    updateTag: async (req, res, next) => {
        const { 
            body,
            teas
        } = req.body;

        const foundTag = await Tag.findByIdAndUpdate({
            _id: req.params.id
        }, { 
            $set: {
                body,
                teas
            }
        }, (err) => {
            if(err) return err;
        });
        res.status(200).send({success: 'Successfully updated'});
    },
    deleteTag: async (req, res, next) => {
        const foundTag = await Tag.findByIdAndDelete({_id: req.params.id}); 
        res.status(200).json({success: 'Successfully deleted.'});
    }
}