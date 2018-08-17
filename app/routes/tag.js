//Dependencies
const express = require('express');
const router = require('express-promise-router')();

const TagControllers = require('../controllers/tag.js');

//Routes
router.route('/').get(TagControllers.getTag);

router.route('/').post(TagControllers.postTag);

router.route('/:id').put(TagControllers.updateTag);

router.route('/:id').delete(TagControllers.deleteTag);

module.exports = router;