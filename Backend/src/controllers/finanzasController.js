const Finanza = require('../models/Finanzas');

// Obtener todas las finanzas
exports.getAllFinanzas = async (req, res) => {
  try {
    const finanzas = await Finanza.find();
    res.json(finanzas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear finanza
exports.createFinanza = async (req, res) => {
  try {
    const { monto, descripcion } = req.body;
    const nuevaFinanza = await Finanza.create({ monto, descripcion });
    res.status(201).json(nuevaFinanza);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
