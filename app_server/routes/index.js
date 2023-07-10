// I made these two 'const' like the example, 
// but if I have issues I can try returning them to 'var'
const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main')

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
