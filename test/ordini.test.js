const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const Ordine = require('../src/models/Ordine');
const Prodotto = require('../src/models/Prodotto');
const Utente = require('../src/models/Utente');
const express = require('express');
const ordiniRoutes = require('../src/routes/ordini');

chai.use(chaiHttp);
const { expect } = chai;

const app = express();
app.use(express.json());
app.use('/api/ordini', ordiniRoutes);

let server;

describe('API Ordini', function() {
  this.timeout(15000);
  before(function(done) {
  this.timeout(10000);
  mongoose.connect('mongodb://localhost:27017/pof_gas_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    server = app.listen(4003, done);
  }).catch(done);
});
after(function(done) {
  this.timeout(10000);
  if (mongoose.connection.readyState === 1 && mongoose.connection.db) {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => {
        server.close(done);
      });
    });
  } else {
    server.close(done);
  }
});
  beforeEach(async function() {
    await Ordine.deleteMany();
    await Prodotto.deleteMany();
    await Utente.deleteMany();
  });

  it('crea un nuovo ordine', async () => {
    const prodotto = await Prodotto.create({ nome: 'Tofu' });
    const utente = await Utente.create({ nome: 'Anna', cognome: 'Neri', email: 'anna@example.com' });
    return chai.request(server)
      .post('/api/ordini')
      .send({ prodotti: [prodotto._id], utenti: [utente._id] })
      .then(res => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('_id');
      });
  });

  it('modifica un ordine', async () => {
    const prodotto1 = await Prodotto.create({ nome: 'Tempeh' });
    const prodotto2 = await Prodotto.create({ nome: 'Seitan' });
    const utente = await Utente.create({ nome: 'Marco', cognome: 'Blu', email: 'marco@example.com' });
    const ordine = await Ordine.create({ prodotti: [prodotto1._id], utenti: [utente._id] });
    return chai.request(server)
      .put(`/api/ordini/${ordine._id}`)
      .send({ prodotti: [prodotto2._id] })
      .then(res => {
        expect(res).to.have.status(200);
        expect(res.body.prodotti[0]).to.equal(String(prodotto2._id));
      });
  });

  it('cancella un ordine', async () => {
    const prodotto = await Prodotto.create({ nome: 'Burger Veg' });
    const utente = await Utente.create({ nome: 'Sara', cognome: 'Gialli', email: 'sara@example.com' });
    const ordine = await Ordine.create({ prodotti: [prodotto._id], utenti: [utente._id] });
    return chai.request(server)
      .delete(`/api/ordini/${ordine._id}`)
      .then(res => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message');
      });
  });

  it('filtra ordini per data', async () => {
    const prodotto = await Prodotto.create({ nome: 'Latte di Soia' });
    const utente = await Utente.create({ nome: 'Luca', cognome: 'Rossi', email: 'luca.rossi@example.com' });
    await Ordine.create({ prodotti: [prodotto._id], utenti: [utente._id], dataInserimento: new Date('2025-06-10') });
    return chai.request(server)
      .get('/api/ordini?data=2025-06-10')
      .then(res => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.greaterThan(0);
      });
  });
});
