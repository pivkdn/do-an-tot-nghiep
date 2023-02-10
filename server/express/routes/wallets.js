var express = require('express');
var router = express.Router();
const WalletController = require('../controllers/wallet.controller');
/* GET users listing. */

router.post('/id',WalletController.GetByUser)
router.get('/',WalletController.GetAll)
router.post('/nap-tien',WalletController.NapTien)
module.exports = router;
