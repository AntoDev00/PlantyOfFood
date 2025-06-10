const express = require('express');
const { body, param } = require('express-validator');
const router = express.Router();
const Prodotto = require('../models/Prodotto');

// Crea un nuovo prodotto
router.post('/',
  body('nome').isString().trim().isLength({ min: 2, max: 100 }),
  async (req, res, next) => {
    try {
      if (!req.body.nome) return res.status(400).json({ error: 'Nome richiesto' });
      const prodotto = await Prodotto.create({ nome: req.body.nome });
      res.status(201).json(prodotto);
    } catch (err) {
      next(err);
    }
  }
);

// Modifica prodotto
router.put('/:id',
  param('id').isInt(),
  body('nome').isString().trim().isLength({ min: 2, max: 100 }),
  async (req, res, next) => {
    try {
      const prodotto = await Prodotto.findByPk(req.params.id);
      if (!prodotto) return res.status(404).json({ error: 'Prodotto non trovato' });
      prodotto.nome = req.body.nome;
      await prodotto.save();
      res.json(prodotto);
    } catch (err) {
      next(err);
    }
  }
);

// Cancella prodotto
router.delete('/:id',
  param('id').isInt(),
  async (req, res, next) => {
    try {
      const prodotto = await Prodotto.findByPk(req.params.id);
      if (!prodotto) return res.status(404).json({ error: 'Prodotto non trovato' });
      await prodotto.destroy();
      res.json({ message: 'Prodotto cancellato' });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
