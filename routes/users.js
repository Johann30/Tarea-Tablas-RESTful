var express = require('express');
var router = express.Router();

const controller = require('../controllers/users');

/* GET users listing. */
router.get('/', controller.list);
router.get('/:n1/:n2', controller.index);
router.post('/', controller.create);
router.put('/', controller.replace);
router.patch('/', controller.update);
router.delete('/:n1/:n2', controller.destroy);

module.exports = router;
