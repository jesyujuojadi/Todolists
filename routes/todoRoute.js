const express = require('express');
const { todoSchema } = require('../schemas.js');

const router = express.Router();
const controller = require('../controllers/TodoController');

router.get('/new', controller.renderNewForm);
router.post('/', controller.createTodo)
router.get('/', controller.showAllTodo)
router.get('/:id/edit', controller.renderEditForm)
router.put('/:id', controller.updateTodo)
router.delete('/:id', controller.deleteTodo)



module.exports = router;

