require('dotenv').config();

module.exports = {
  dbURL: process.env.DB_URL || 'mongodb+srv://00000921:Tedehoja16L.@cluster0.f8fbhwq.mongodb.net/',
  jwtSecret: process.env.JWT_SECRET || 'clave_secreta_por_defecto',
}; 
