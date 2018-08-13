const Tea = require('../models/Tea.js');
const teas = require('../data/teas.json');

module.exports = {
    getTea: async (req, res, next) => {
        //Get all teas
        console.log('did it?');
        res.status(200).json({success: 'Got dem tea!'});
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
        } = req.value.body;
        
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
        console.log('working?');
        //respond with tea
        res.status(200).json({success: 'success!'});
    }
}