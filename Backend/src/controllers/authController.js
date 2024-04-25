const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config/config');
const {authenticateToken } = require ('../middlewares/authMiddleware');

// Registrar un nuevo usuario
exports.signup = async (req, res) => {
    try {
        const { firstName, lastName, age, username, email, password } = req.body;

        console.log('Datos recibidos para registro:', req.body);

        // Verificar si el usuario ya existe en la base de datos
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('El correo electrónico ya está en uso');
            return res.status(400).json({ message: 'El correo electrónico ya está en uso' });
        }

        // Hashear la contraseña antes de guardarla en la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario en la base de datos
        const newUser = new User({ firstName, lastName, age, username, email, password: hashedPassword });
        await newUser.save();

        console.log('Usuario registrado exitosamente');
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error al registrar usuario:', error.message);
        res.status(500).json({ error: error.message });
    }
};

// Iniciar sesión
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log('Datos recibidos para inicio de sesión:', req.body);

        // Verificar si el usuario existe en la base de datos
        const user = await User.findOne({ email });
        if (!user) {
            console.log('Credenciales inválidas');
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Verificar la contraseña
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            console.log('Credenciales inválidas');
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Generar token JWT si la autenticación es exitosa
        const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1h' });

        console.log('Inicio de sesión exitoso');
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error al iniciar sesión:', error.message);
        res.status(500).json({ error: error.message });
    }
};

// Obtener detalles del usuario por su ID
exports.getUserDetails = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error al obtener detalles del usuario:', error.message);
        res.status(500).json({ error: error.message });
    }
};