const express = require('express');
const { body, param } = require('express-validator');
const router = express.Router();
const Utente = require('../models/Utente');

// Crea un nuovo utente
router.post('/',
  body('nome').isString().trim().isLength({ min: 2, max: 50 }),
  body('cognome').isString().trim().isLength({ min: 2, max: 50 }),
  body('email').isEmail().normalizeEmail(),
  async (req, res, next) => {
    try {
      const { nome, cognome, email } = req.body;
      if (!nome || !cognome || !email) return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
      const utenteEsistente = await Utente.findOne({ where: { email } });
      if (utenteEsistente) return res.status(409).json({ error: 'Email già registrata' });
      const utente = await Utente.create({ nome, cognome, email });
      res.status(201).json(utente);
    } catch (err) {
      next(err);
    }
  }
);

// Modifica utente
router.put('/:id',
  param('id').isInt(),
  body('nome').optional().isString().trim().isLength({ min: 2, max: 50 }),
  body('cognome').optional().isString().trim().isLength({ min: 2, max: 50 }),
  body('email').optional().isEmail().normalizeEmail(),
  async (req, res, next) => {
    try {
      const utente = await Utente.findByPk(req.params.id);
      if (!utente) return res.status(404).json({ error: 'Utente non trovato' });
      if (req.body.nome) utente.nome = req.body.nome;
      if (req.body.cognome) utente.cognome = req.body.cognome;
      if (req.body.email) utente.email = req.body.email;
      await utente.save();
      res.json(utente);
    } catch (err) {
      next(err);
    }
  }
);

// Cancella utente
router.delete('/:id',
  param('id').isInt(),
  async (req, res, next) => {
    try {
      const utente = await Utente.findByPk(req.params.id);
      if (!utente) return res.status(404).json({ error: 'Utente non trovato' });
      await utente.destroy();
      res.json({ message: 'Utente cancellato' });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
