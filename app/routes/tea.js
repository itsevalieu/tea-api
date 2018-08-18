//Dependencies
const express = require('express');
const router = require('express-promise-router')();

const TeaControllers = require('../controllers/tea.js');

//Routes
router.route('/').get(TeaControllers.getTea);

router.route('/').post(TeaControllers.postTea);

router.route('/:id').put(TeaControllers.updateTea);

router.route('/:id').delete(TeaControllers.deleteTea);

//Tea Type Routes
router.route('/black').get(TeaControllers.getBlackTea);
router.route('/green').get(TeaControllers.getGreenTea);
router.route('/oolong').get(TeaControllers.getOolongTea);
router.route('/white').get(TeaControllers.getWhiteTea);
router.route('/herbal').get(TeaControllers.getHerbalTea);
router.route('/puerh').get(TeaControllers.getPuerhTea);
router.route('/fruitblend').get(TeaControllers.getFruitBlendTea);
// router.route('/tags').get(TeaControllers.getTeaTags);
module.exports = router;