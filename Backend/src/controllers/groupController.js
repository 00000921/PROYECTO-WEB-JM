const Group = require('../models/Group');

exports.createGroup = async (req, res) => {
    try {
        const { name, members, post } = req.body;

        const newGroup = new Group({
            name,
            members: [req.user.id], // Suponiendo que tienes información del usuario en el objeto `req.user`
            posts: [],
        });

        await newGroup.save();

        res.status(201).json({ message: 'Grupo creado exitosamente', group: newGroup });
    } catch (error) {
        console.error('Error al crear el grupo:', error); // Agrega un mensaje de error en la consola
        res.status(500).json({ error: 'No se pudo crear el grupo' });
    }
};

exports.joinGroup = async (req, res) => {
    try {
        const { groupId } = req.body;

        const group = await Group.findById(groupId);
        if (!group) {
            console.error('Grupo no encontrado'); // Agrega un mensaje de error en la consola
            return res.status(404).json({ message: 'Grupo no encontrado' });
        }

        // Verifica si el usuario ya está en el grupo
        const isMember = group.members.includes(req.user.id);
        if (isMember) {
            return res.status(400).json({ message: 'Ya eres miembro de este grupo' });
        }

        group.members.push(req.user.id);
        await group.save();

        res.status(200).json({ message: 'Usuario unido al grupo correctamente', group });
    } catch (error) {
        console.error('Error al unirse al grupo:', error); // Agrega un mensaje de error en la consola
        res.status(500).json({ error: 'No se pudo unir al grupo' });
    }
};


exports.createPost = async (req, res) => {
    try {
        const { groupId } = req.params;
        const { content } = req.body;

        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ message: 'Grupo no encontrado' });
        }

        const newPost = {
            content,
            author: req.user.id, // Suponiendo que tienes información del usuario en el objeto `req.user`
            comments: [],
        };

        group.posts.push(newPost);
        await group.save();

        res.status(201).json({ message: 'Publicación creada exitosamente', post: newPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createComment = async (req, res) => {
    try {
        const { groupId, postId } = req.params;
        const { content } = req.body;

        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ message: 'Grupo no encontrado' });
        }

        const post = group.posts.id(postId);
        if (!post) {
            return res.status(404).json({ message: 'Publicación no encontrada' });
        }

        const newComment = {
            content,
            author: req.user.id, // Suponiendo que tienes información del usuario en el objeto `req.user`
        };

        post.comments.push(newComment);
        await group.save();

        res.status(201).json({ message: 'Comentario agregado exitosamente', comment: newComment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
