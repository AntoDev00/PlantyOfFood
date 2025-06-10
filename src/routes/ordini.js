const express = require('express');
const { body, param, query } = require('express-validator');
const router = express.Router();
const Ordine = require('../models/Ordine');
const Prodotto = require('../models/Prodotto');
const Utente = require('../models/Utente');

// Crea un nuovo ordine
router.post('/',
  body('prodotti').isArray({ min: 1 }),
  body('utenti').isArray({ min: 1 }),
  async (req, res, next) => {
    try {
      // Sicurezza: validazione ObjectId
      const prodottiIds = req.body.prodotti.filter(id => id.match(/^[a-fA-F0-9]{24}$/));
      const utentiIds = req.body.utenti.filter(id => id.match(/^[a-fA-F0-9]{24}$/));
      if (prodottiIds.length !== req.body.prodotti.length || utentiIds.length !== req.body.utenti.length) {
        return res.status(400).json({ error: 'ID non validi' });
      }
      const ordine = new Ordine({ prodotti: prodottiIds, utenti: utentiIds });
      await ordine.save();
      res.status(201).json(ordine);
    } catch (err) {
      next(err);
    }
  }
);

// Modifica ordine
router.put('/:id',
  param('id').isMongoId(),
  body('prodotti').optional().isArray({ min: 1 }),
  body('utenti').optional().isArray({ min: 1 }),
  async (req, res, next) => {
    try {
      const update = {};
      if (req.body.prodotti) {
        const prodottiIds = req.body.prodotti.filter(id => id.match(/^[a-fA-F0-9]{24}$/));
        if (prodottiIds.length !== req.body.prodotti.length) {
          return res.status(400).json({ error: 'ID prodotti non validi' });
        }
        update.prodotti = prodottiIds;
      }
      if (req.body.utenti) {
        const utentiIds = req.body.utenti.filter(id => id.match(/^[a-fA-F0-9]{24}$/));
        if (utentiIds.length !== req.body.utenti.length) {
          return res.status(400).json({ error: 'ID utenti non validi' });
        }
        update.utenti = utentiIds;
      }
      const ordine = await Ordine.findByIdAndUpdate(
        req.params.id,
        update,
        { new: true, runValidators: true }
      );
      if (!ordine) return res.status(404).json({ error: 'Ordine non trovato' });
      res.json(ordine);
    } catch (err) {
      next(err);
    }
  }
);

// Cancella ordine
router.delete('/:id',
  param('id').isMongoId(),
  async (req, res, next) => {
    try {
      const ordine = await Ordine.findByIdAndDelete(req.params.id);
      if (!ordine) return res.status(404).json({ error: 'Ordine non trovato' });
      res.json({ message: 'Ordine cancellato' });
    } catch (err) {
      next(err);
    }
  }
);

// Visualizza tutti gli ordini, con filtri
router.get('/',
  query('data').optional().isISO8601(),
  query('prodotto').optional().isMongoId(),
  async (req, res, next) => {
    try {
      const filter = {};
      if (req.query.data) {
        const data = new Date(req.query.data);
        filter.dataInserimento = {
          $gte: new Date(data.setHours(0,0,0,0)),
          $lte: new Date(data.setHours(23,59,59,999))
        };
      }
      if (req.query.prodotto) {
        filter.prodotti = req.query.prodotto;
      }
      const ordini = await Ordine.find(filter)
        .populate('prodotti')
        .populate('utenti')
        .sort({ dataInserimento: -1 });
      res.json(ordini);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
