var express = require('express');
var router = express.Router();
const ProductController = require('../controllers/product.controller');
/* GET users listing. */
router.get('/', ProductController.GetAll);
router.get('/s',ProductController.GetAlls)
router.post('/id',ProductController.GetById)
router.post('/new', ProductController.Created)
router.post('/update', ProductController.Updated)
router.post('/delete',ProductController.Deleted)
module.exports = router;
