//Dependencies
const express = require('express');
const router = require('express-promise-router')();

const TeaControllers = require('../controllers/tea.js');

//Routes
router.route('/').get(TeaControllers.getTea);

router.route('/').post(TeaControllers.postTea);

router.route('/:id').put(TeaControllers.updateTea);

router.route('/:id').delete(TeaControllers.deleteTea);

module.exports = router;