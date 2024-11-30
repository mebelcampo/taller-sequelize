const express = require('express');
const { Prestamo } = require('../models'); 
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const prestamos = await Prestamo.findAll();
    res.json(prestamos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los préstamos' });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevoPrestamo = await Prestamo.create(req.body);
    res.status(201).json(nuevoPrestamo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el préstamo' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const prestamo = await Prestamo.findByPk(req.params.id);
    if (prestamo) {
      await prestamo.update(req.body);
      res.json(prestamo);
    } else {
      res.status(404).json({ error: 'Préstamo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el préstamo' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const prestamo = await Prestamo.findByPk(req.params.id);
    if (prestamo) {
      await prestamo.destroy();
      res.json({ message: 'Préstamo eliminado' });
    } else {
      res.status(404).json({ error: 'Préstamo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el préstamo' });
  }
});

module.exports = router;
