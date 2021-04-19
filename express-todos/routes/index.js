var express = require('express');
var router = express.Router();
const todoCtrl = require('../controllers/todo');

/* GET home page. */
router.get('/', todoCtrl.index);
router.post('/', todoCtrl.create);
router.delete('/:id', todoCtrl.delete)
module.exports = router;
