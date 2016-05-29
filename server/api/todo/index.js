'use strict';

var express = require('express');
var controller = require('./todo.controller');

var router = express.Router();

router.$routeParams('id', controller.todo);

//router.get('/', controller.index);
router.get('/', controller.query);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
//router.delete('/:id', controller.destroy);
router.delete('/:id', controller.remove);

module.exports = router;
