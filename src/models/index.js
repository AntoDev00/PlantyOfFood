const Prodotto = require('./Prodotto');
const Utente = require('./Utente');
const Ordine = require('./Ordine');

const models = { Prodotto, Utente, Ordine };

// Setup relazioni
Prodotto.associate(models);
Utente.associate(models);
Ordine.associate(models);

module.exports = models;
