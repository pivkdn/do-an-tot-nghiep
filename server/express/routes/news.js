var express = require('express');
var router = express.Router();
const NewsControllers = require('../controllers/news.controller');
/* GET users listing. */
router.get('/', NewsControllers.GetAll);
router.post('/id',NewsControllers.GetById)
module.exports = router;
