var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user.controller');
/* GET users listing. */
router.post('/register', UserController.Register);
router.post('/register-phone', UserController.RegisterToPhone);
router.post('/login',UserController.Login)
router.post('/delete',UserController.Delete)
router.get('/', UserController.GetUsers)
router.post('/',UserController.GetUser)
router.post('/edit',UserController.Edit)
module.exports = router;
