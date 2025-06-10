require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models');
const prodottiRoutes = require('./routes/prodotti');
const utentiRoutes = require('./routes/utenti');
const ordiniRoutes = require('./routes/ordini');

const app = express();
app.use(express.json());

// Rotte principali
app.use('/api/prodotti', prodottiRoutes);
app.use('/api/utenti', utentiRoutes);
app.use('/api/ordini', ordiniRoutes);

// Error handler generico
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Errore interno del server' });
});

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: false })
  .then(() => {
    console.log('Connesso a MySQL e modelli sincronizzati');
    app.listen(PORT, () => {
      console.log(`Server in ascolto su http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Errore connessione MySQL o sincronizzazione modelli:', err);
  });
