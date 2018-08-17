//Dependencies
const express = require('express');
const router = require('express-promise-router')();

const CommentControllers = require('../controllers/comment.js');

//Routes
router.route('/').get(CommentControllers.getComment);

router.route('/').post(CommentControllers.postComment);

router.route('/:id').put(CommentControllers.updateComment);

router.route('/:id').delete(CommentControllers.deleteComment);

module.exports = router;