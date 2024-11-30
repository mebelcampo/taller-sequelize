const express = require('express');
const { Usuario } = require('../models'); 
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});
router.post('/', async (req, res) => {
  try {
    const { nombre, correo, contraseña } = req.body;

    if (!nombre || !correo || !contraseña) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios: nombre, correo, contraseña' });
    }

    const nuevoUsuario = await Usuario.create({ nombre, correo, contraseña });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario', detalle: error.message });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);

    if (usuario) {
      const { nombre, correo, contraseña } = req.body;

      if (!nombre || !correo || !contraseña) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios: nombre, correo, contraseña' });
      }

      await usuario.update({ nombre, correo, contraseña });
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario', detalle: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);

    if (usuario) {
      await usuario.destroy();
      res.json({ message: 'Usuario eliminado' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario', detalle: error.message });
  }
});

module.exports = router;
