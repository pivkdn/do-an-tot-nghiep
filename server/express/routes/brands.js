var express = require('express');
var router = express.Router();
const BrandControllers = require('../controllers/brand.controller');
/* GET users listing. */
router.get('/', BrandControllers.GetAll);
router.post('/id',BrandControllers.GetById)
module.exports = router;
