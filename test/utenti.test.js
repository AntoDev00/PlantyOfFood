const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const Utente = require('../src/models/Utente');
const express = require('express');
const utentiRoutes = require('../src/routes/utenti');

chai.use(chaiHttp);
const { expect } = chai;

const app = express();
app.use(express.json());
app.use('/api/utenti', utentiRoutes);

let server;

describe('API Utenti', function() {
  this.timeout(15000);
  before(function(done) {
  this.timeout(10000);
  mongoose.connect('mongodb://localhost:27017/pof_gas_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    server = app.listen(4002, done);
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
    await Utente.deleteMany();
  });

  it('crea un nuovo utente', (done) => {
    chai.request(server)
      .post('/api/utenti')
      .send({ nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@example.com' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('nome', 'Mario');
        expect(res.body).to.have.property('cognome', 'Rossi');
        expect(res.body).to.have.property('email', 'mario.rossi@example.com');
        done();
      });
  });

  it('modifica un utente', async () => {
    const utente = await Utente.create({ nome: 'Luca', cognome: 'Bianchi', email: 'luca@example.com' });
    return chai.request(server)
      .put(`/api/utenti/${utente._id}`)
      .send({ nome: 'Luca Modificato' })
      .then(res => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('nome', 'Luca Modificato');
      });
  });

  it('cancella un utente', async () => {
    const utente = await Utente.create({ nome: 'Giulia', cognome: 'Verdi', email: 'giulia@example.com' });
    return chai.request(server)
      .delete(`/api/utenti/${utente._id}`)
      .then(res => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message');
      });
  });
});
