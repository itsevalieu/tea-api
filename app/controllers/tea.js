const Tea = require('../models/Tea.js');
const teas = require('../data/teas.json');
	// .get(function(request, response){
	// 	console.log(teas);
	// 	response.json(teas);
	// });
module.exports = {
    getTea: async (req, res, next) => {
        const data = await Tea.find({});
        console.log('got tea');
        res.status(200).json({teas});
    },
    postTea: async (req, res, next) => {
        const { 
            name,
            description,
            benefits,
            type,
            brew,
            origin,
            imageUrl,
            handle
        } = req.body;

        //create new tea
        const newTea = new Tea({
            name,
            description,
            benefits,
            type,
            brew,
            origin,
            imageUrl,
            handle
        });
        await newTea.save();
        //respond with message
        res.status(200).json({success: 'Successfully added to database!'});
    },
    updateTea: async (req, res, next) => {
        const { 
            name,
            description,
            benefits,
            type,
            brew,
            origin,
            imageUrl,
            handle
        } = req.body;

        const foundTea = await Tea.findByIdAndUpdate({
            _id: req.params.id
        }, { 
            $set: {
                name,
                description,
                benefits,
                type,
                brew,
                origin,
                imageUrl,
                handle
            }
        }, (err) => {
            if(err) return err;
        });
        res.status(200).send({success: 'Successfully updated'});
    },
    deleteTea: async (req, res, next) => {
        const foundTea = await Tea.findByIdAndDelete({_id: req.params.id}); 
        res.status(200).json({success: 'Successfully deleted.'});
    }
}