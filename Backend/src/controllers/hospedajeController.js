const Hospedaje = require('../models/Hospedaje');

exports.createHospedaje = async (req, res) => {
    try {
        const { title, price, image, description, location, email, phone } = req.body;

        const newHospedaje = new Hospedaje({
            title,
            price,
            image,
            description,
            location,
            email,
            phone,
        });

        await newHospedaje.save();

        res.status(201).json({ message: 'Publicación de hospedaje creada exitosamente', hospedaje: newHospedaje });
    } catch (error) {
        res.status(500).json({ error: 'No se pudo crear la publicación de hospedaje' });
    }
};

exports.getHospedajes = async (req, res) => {
    try {
        const hospedajes = await Hospedaje.find();
        res.status(200).json(hospedajes);
    } catch (error) {
        res.status(500).json({ error: 'No se pudieron obtener los posts de hospedaje' });
    }
};
