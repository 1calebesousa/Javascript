const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/clientesController');

router.get('/', produtosController.produtos);
router.get('/camisetas', produtosController.camisetas);

module.exports = router;   