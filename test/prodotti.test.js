const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const Prodotto = require('../src/models/Prodotto');
const express = require('express');
const prodottiRoutes = require('../src/routes/prodotti');

chai.use(chaiHttp);
const { expect } = chai;

// Setup un'app Express separata per i test
const app = express();
app.use(express.json());
app.use('/api/prodotti', prodottiRoutes);

let server;

describe('API Prodotti', function() {
  this.timeout(15000);
  before(function(done) {
  this.timeout(10000);
  mongoose.connect('mongodb://localhost:27017/pof_gas_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    server = app.listen(4001, done);
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
    await Prodotto.deleteMany();
  });

  it('crea un nuovo prodotto', (done) => {
    chai.request(server)
      .post('/api/prodotti')
      .send({ nome: 'Lenticchie' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('nome', 'Lenticchie');
        done();
      });
  });

  it('modifica un prodotto', async () => {
    const prodotto = await Prodotto.create({ nome: 'Ceci' });
    return chai.request(server)
      .put(`/api/prodotti/${prodotto._id}`)
      .send({ nome: 'Ceci Bio' })
      .then(res => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('nome', 'Ceci Bio');
      });
  });

  it('cancella un prodotto', async () => {
    const prodotto = await Prodotto.create({ nome: 'Fagioli' });
    return chai.request(server)
      .delete(`/api/prodotti/${prodotto._id}`)
      .then(res => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message');
      });
  });
});
