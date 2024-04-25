const mongoose = require('mongoose');
const { Schema } = mongoose;

const finanzaSchema = new Schema({
    monto: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
});

const Finanza = mongoose.model('Finanza', finanzaSchema);

module.exports = Finanza;
