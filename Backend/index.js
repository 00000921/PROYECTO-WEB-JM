const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./src/config/config');
const authRoutes = require('./src/routes/authRoutes');
const forumRoutes = require('./src/routes/forumRoutes');
const groupRoutes = require('./src/routes/groupRoutes');
const hospedajeRoutes = require('./src/routes/hospedajeRoutes');
const finanzasRoutes = require('./src/routes/finanzasRoutes');
const app = express();

// Conexión a Mongo
mongoose.connect(config.dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conectado a la Base de datos');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB Atlas:', err);
  });

app.use(express.json());

// Configuración de CORS para permitir solicitudes desde todos los dominios
app.use(cors());

// Rutas de autenticación
app.use('/auth', authRoutes);

// Rutas del foro
app.use('/forum', forumRoutes);

// Rutas de los grupos
app.use('/groups', groupRoutes);

// Rutas de hospedaje
app.use('/hospedaje', hospedajeRoutes);

// Rutas de Finanzas
app.use('/finanzas', finanzasRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
