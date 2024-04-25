const express = require('express');
const router = express.Router();
const hospedajeController = require('../controllers/hospedajeController');

router.post('/create', hospedajeController.createHospedaje);
router.get('/', hospedajeController.getHospedajes);

module.exports = router;