var express = require('express');
var router = express.Router();
const OrderController = require('../controllers/order.controller');
/* GET users listing. */
router.get('/', OrderController.GetAll);
router.get('/s', OrderController.GetAlls);
router.post('/add',OrderController.Add)
module.exports = router;
