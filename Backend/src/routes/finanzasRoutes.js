const express = require('express');
const router = express.Router();
const finanzaController = require('../controllers/finanzasController');

// Obtener finanzas
router.get('/', finanzaController.getAllFinanzas);

// Crear finanza
router.post('/', finanzaController.createFinanza);

module.exports = router;
