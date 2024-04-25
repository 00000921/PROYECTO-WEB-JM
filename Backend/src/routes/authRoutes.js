const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const {authenticateToken} = require ('../middlewares/authMiddleware');

// Ruta para registrar un nuevo usuario
router.post('/signup', authController.signup);

// Ruta para iniciar sesión
router.post('/login', authController.login);

// Ruta para obtener detalles del usuario actual
router.get('/:user', authenticateToken,authController.getUserDetails);

module.exports = router;