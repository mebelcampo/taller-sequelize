const express = require('express');
const { Biblioteca } = require('../models'); 
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const bibliotecas = await Biblioteca.findAll(); 
    res.json(bibliotecas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las bibliotecas' });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevaBiblioteca = await Biblioteca.create(req.body);
    res.status(201).json(nuevaBiblioteca);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la biblioteca' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const biblioteca = await Biblioteca.findByPk(req.params.id); 
    if (biblioteca) {
      await biblioteca.update(req.body);
      res.json(biblioteca);
    } else {
      res.status(404).json({ error: 'Biblioteca no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la biblioteca' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const biblioteca = await Biblioteca.findByPk(req.params.id); 
    if (biblioteca) {
      await biblioteca.destroy();
      res.json({ message: 'Biblioteca eliminada' });
    } else {
      res.status(404).json({ error: 'Biblioteca no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la biblioteca' });
  }
});

module.exports = router;
