# POF: Planty of Food – API Gruppi di Acquisto Solidale

API RESTful per la gestione dei Gruppi di Acquisto Solidale (GAS) per l'e-commerce Planty of Food# 🥦 Planty of Food GAS API

Planty of Food è un backend RESTful per la gestione di Gruppi di Acquisto Solidale (GAS), pensato per piattaforme di e-commerce sostenibile. Permette la gestione di prodotti, utenti e ordini tramite API sicure e moderne, con database MySQL.

## ✨ Funzionalità Principali

- **Gestione Prodotti**: CRUD completo per prodotti alimentari
- **Gestione Utenti**: CRUD utenti con validazione email e dati anagrafici
- **Gestione Ordini**: CRUD ordini con associazione a prodotti e utenti, filtri avanzati
- **Validazione Input**: Sicurezza contro SQL injection e dati errati tramite express-validator
- **Gestione Errori**: Risposte API coerenti e dettagliate
- **Test Automatici**: (in aggiornamento) per tutte le entità principali

## 🛠️ Tecnologie Utilizzate

- **Backend**: Node.js, Express.js
- **Database**: MySQL (gestito tramite Sequelize ORM)
- **Validazione**: express-validator
- **Testing**: Mocha, Chai, Supertest
- **Gestione ambiente**: dotenv

## 🚀 Installazione e Utilizzo

> **Attenzione:** Il file `.env` NON va caricato su GitHub. Usa `.env.example` come base e aggiungi i tuoi segreti solo in locale.

### Requisiti Preliminari

- Node.js (v14.x o superiore)
- npm (v6.x o superiore)
- MySQL (locale o su XAMPP, porta 3306)

### Passaggi per l'Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/yourusername/PlantyOfFood.git
   cd pof-gas-api
   ```
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Configura il file `.env`:
   Crea un nuovo file chiamato `.env` nella root del progetto e inserisci le seguenti variabili, sostituendo i valori con quelli del tuo ambiente:

   ```env
   MYSQL_HOST=tuo_host
   MYSQL_PORT=porta_mysql
   MYSQL_DATABASE=nome_database
   MYSQL_USER=tuo_utente
   MYSQL_PASSWORD=la_tua_password
   PORT=porta_server
   ```
4. Crea il database e le tabelle:
   - Avvia MySQL (es. tramite XAMPP)
   - Crea il database `pof_gas`
   - Importa il file `migrations.sql` (da phpMyAdmin o terminale)
5. Avvia il server:
   ```bash
   npm start
   ```
   Il server sarà attivo su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
POF Planty of Food/
├── src/
│   ├── app.js
│   ├── db.js
│   ├── models/
│   │   ├── Prodotto.js
│   │   ├── Utente.js
│   │   ├── Ordine.js
│   │   └── index.js
│   ├── routes/
│   │   ├── prodotti.js
│   │   ├── utenti.js
│   │   └── ordini.js
├── test/
│   ├── prodotti.test.js
│   ├── utenti.test.js
│   └── ordini.test.js
├── migrations.sql
├── package.json
├── .env         # Solo locale, NON versionare
└── README.md
```

## 📱 Come Utilizzare le API

1. **Prodotti**
   - `GET /api/prodotti` — Elenco prodotti
   - `POST /api/prodotti` — Crea prodotto
   - `PUT /api/prodotti/:id` — Modifica prodotto
   - `DELETE /api/prodotti/:id` — Cancella prodotto
2. **Utenti**
   - `GET /api/utenti` — Elenco utenti
   - `POST /api/utenti` — Crea utente
   - `PUT /api/utenti/:id` — Modifica utente
   - `DELETE /api/utenti/:id` — Cancella utente
3. **Ordini**
   - `GET /api/ordini` — Elenco ordini (con filtri)
   - `POST /api/ordini` — Crea ordine
   - `PUT /api/ordini/:id` — Modifica ordine
   - `DELETE /api/ordini/:id` — Cancella ordine

## 🔒 Sicurezza & Best Practice

- Tutte le query sono parametrizzate tramite Sequelize (ORM)
- Validazione input con express-validator
- Gestione centralizzata degli errori
- Nessuna password o dato sensibile hardcoded

## 🧪 Test Automatici

- I test automatici sono in fase di aggiornamento per MySQL/Sequelize.
- Esegui i test con:
  ```bash
  npm test
  ```

## 🔄 Roadmap

- Aggiornamento completo test automatici per MySQL
- Aggiunta autenticazione JWT
- Documentazione API con Swagger/OpenAPI
- Miglioramento logging e gestione errori
- Deploy su cloud

## 📄 .gitignore

Questo progetto include un file `.gitignore` per evitare di caricare su GitHub file sensibili o inutili:

- `.env` e varianti
- `node_modules/`
- log, cache, file temporanei

## 📜 Licenza

Questo progetto è distribuito con licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

## 👥 Contributi

Contributi, segnalazioni di bug e richieste di funzionalità sono benvenuti! Apri una issue o una pull request.

---

Creato con 🌱 per la comunità dei Gruppi di Acquisto Solidale e chi crede in un cibo più sostenibile.

## Stack
- Node# 🥦 Planty of Food GAS API

Planty of Food è un backend RESTful per la gestione di Gruppi di Acquisto Solidale (GAS), pensato per piattaforme di e-commerce sostenibile. Permette la gestione di prodotti, utenti e ordini tramite API sicure e moderne, con database MySQL.

## ✨ Funzionalità Principali

- **Gestione Prodotti**: CRUD completo per prodotti alimentari
- **Gestione Utenti**: CRUD utenti con validazione email e dati anagrafici
- **Gestione Ordini**: CRUD ordini con associazione a prodotti e utenti, filtri avanzati
- **Validazione Input**: Sicurezza contro SQL injection e dati errati tramite express-validator
- **Gestione Errori**: Risposte API coerenti e dettagliate
- **Test Automatici**: (in aggiornamento) per tutte le entità principali

## 🛠️ Tecnologie Utilizzate

- **Backend**: Node.js, Express.js
- **Database**: MySQL (gestito tramite Sequelize ORM)
- **Validazione**: express-validator
- **Testing**: Mocha, Chai, Supertest
- **Gestione ambiente**: dotenv

## 🚀 Installazione e Utilizzo

> **Attenzione:** Il file `.env` NON va caricato su GitHub. Usa `.env.example` come base e aggiungi i tuoi segreti solo in locale.

### Requisiti Preliminari

- Node.js (v14.x o superiore)
- npm (v6.x o superiore)
- MySQL (locale o su XAMPP, porta 3306)

### Passaggi per l'Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/AntoDev00/PlantyOfFood.git
   cd pof-gas-api
   ```
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Configura il file `.env`:
   Copia `.env.example` in `.env` e inserisci i parametri del tuo MySQL:
   ```env
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_DATABASE=pof_gas
   MYSQL_USER=root
   MYSQL_PASSWORD=
   PORT=3000
   ```
4. Crea il database e le tabelle:
   - Avvia MySQL (es. tramite XAMPP)
   - Crea il database `pof_gas`
   - Importa il file `migrations.sql` (da phpMyAdmin o terminale)
5. Avvia il server:
   ```bash
   npm start
   ```
   Il server sarà attivo su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
POF Planty of Food/
├── src/
│   ├── app.js
│   ├── db.js
│   ├── models/
│   │   ├── Prodotto.js
│   │   ├── Utente.js
│   │   ├── Ordine.js
│   │   └── index.js
│   ├── routes/
│   │   ├── prodotti.js
│   │   ├── utenti.js
│   │   └── ordini.js
├── test/
│   ├── prodotti.test.js
│   ├── utenti.test.js
│   └── ordini.test.js
├── migrations.sql
├── package.json
├── .env         # Solo locale, NON versionare.example
└── README.md
```

## 📱 Come Utilizzare le API

1. **Prodotti**
   - `GET /api/prodotti` — Elenco prodotti
   - `POST /api/prodotti` — Crea prodotto
   - `PUT /api/prodotti/:id` — Modifica prodotto
   - `DELETE /api/prodotti/:id` — Cancella prodotto
2. **Utenti**
   - `GET /api/utenti` — Elenco utenti
   - `POST /api/utenti` — Crea utente
   - `PUT /api/utenti/:id` — Modifica utente
   - `DELETE /api/utenti/:id` — Cancella utente
3. **Ordini**
   - `GET /api/ordini` — Elenco ordini (con filtri)
   - `POST /api/ordini` — Crea ordine
   - `PUT /api/ordini/:id` — Modifica ordine
   - `DELETE /api/ordini/:id` — Cancella ordine

## 🔒 Sicurezza & Best Practice

- Tutte le query sono parametrizzate tramite Sequelize (ORM)
- Validazione input con express-validator
- Gestione centralizzata degli errori
- Nessuna password o dato sensibile hardcoded

## 🧪 Test Automatici

- I test automatici sono in fase di aggiornamento per MySQL/Sequelize.
- Esegui i test con:
  ```bash
  npm test
  ```

## 🔄 Roadmap

- Aggiornamento completo test automatici per MySQL
- Aggiunta autenticazione JWT
- Documentazione API con Swagger/OpenAPI
- Miglioramento logging e gestione errori
- Deploy su cloud

## 📄 .gitignore

Questo progetto include un file `.gitignore` per evitare di caricare su GitHub file sensibili o inutili:

- `.env` e varianti
- `node_modules/`
- log, cache, file temporanei

## 📜 Licenza

Questo progetto è distribuito con licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

## 👥 Contributi

Contributi, segnalazioni di bug e richieste di funzionalità sono benvenuti! Apri una issue o una pull request.

---

Creato con 🌱 per la comunità dei Gruppi di Acquisto Solidale e chi crede in un cibo più sostenibile.js + Express# 🥦 Planty of Food GAS API

Planty of Food è un backend RESTful per la gestione di Gruppi di Acquisto Solidale (GAS), pensato per piattaforme di e-commerce sostenibile. Permette la gestione di prodotti, utenti e ordini tramite API sicure e moderne, con database MySQL.

## ✨ Funzionalità Principali

- **Gestione Prodotti**: CRUD completo per prodotti alimentari
- **Gestione Utenti**: CRUD utenti con validazione email e dati anagrafici
- **Gestione Ordini**: CRUD ordini con associazione a prodotti e utenti, filtri avanzati
- **Validazione Input**: Sicurezza contro SQL injection e dati errati tramite express-validator
- **Gestione Errori**: Risposte API coerenti e dettagliate
- **Test Automatici**: (in aggiornamento) per tutte le entità principali

## 🛠️ Tecnologie Utilizzate

- **Backend**: Node.js, Express.js
- **Database**: MySQL (gestito tramite Sequelize ORM)
- **Validazione**: express-validator
- **Testing**: Mocha, Chai, Supertest
- **Gestione ambiente**: dotenv

## 🚀 Installazione e Utilizzo

> **Attenzione:** Il file `.env` NON va caricato su GitHub. Usa `.env.example` come base e aggiungi i tuoi segreti solo in locale.

### Requisiti Preliminari

- Node.js (v14.x o superiore)
- npm (v6.x o superiore)
- MySQL (locale o su XAMPP, porta 3306)

### Passaggi per l'Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/AntoDev00/PlantyOfFood.git
   cd pof-gas-api
   ```
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Configura il file `.env`:
   Copia `.env.example` in `.env` e inserisci i parametri del tuo MySQL:
   ```env
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_DATABASE=pof_gas
   MYSQL_USER=root
   MYSQL_PASSWORD=
   PORT=3000
   ```
4. Crea il database e le tabelle:
   - Avvia MySQL (es. tramite XAMPP)
   - Crea il database `pof_gas`
   - Importa il file `migrations.sql` (da phpMyAdmin o terminale)
5. Avvia il server:
   ```bash
   npm start
   ```
   Il server sarà attivo su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
POF Planty of Food/
├── src/
│   ├── app.js
│   ├── db.js
│   ├── models/
│   │   ├── Prodotto.js
│   │   ├── Utente.js
│   │   ├── Ordine.js
│   │   └── index.js
│   ├── routes/
│   │   ├── prodotti.js
│   │   ├── utenti.js
│   │   └── ordini.js
├── test/
│   ├── prodotti.test.js
│   ├── utenti.test.js
│   └── ordini.test.js
├── migrations.sql
├── package.json
├── .env         # Solo locale, NON versionare.example
└── README.md
```

## 📱 Come Utilizzare le API

1. **Prodotti**
   - `GET /api/prodotti` — Elenco prodotti
   - `POST /api/prodotti` — Crea prodotto
   - `PUT /api/prodotti/:id` — Modifica prodotto
   - `DELETE /api/prodotti/:id` — Cancella prodotto
2. **Utenti**
   - `GET /api/utenti` — Elenco utenti
   - `POST /api/utenti` — Crea utente
   - `PUT /api/utenti/:id` — Modifica utente
   - `DELETE /api/utenti/:id` — Cancella utente
3. **Ordini**
   - `GET /api/ordini` — Elenco ordini (con filtri)
   - `POST /api/ordini` — Crea ordine
   - `PUT /api/ordini/:id` — Modifica ordine
   - `DELETE /api/ordini/:id` — Cancella ordine

## 🔒 Sicurezza & Best Practice

- Tutte le query sono parametrizzate tramite Sequelize (ORM)
- Validazione input con express-validator
- Gestione centralizzata degli errori
- Nessuna password o dato sensibile hardcoded

## 🧪 Test Automatici

- I test automatici sono in fase di aggiornamento per MySQL/Sequelize.
- Esegui i test con:
  ```bash
  npm test
  ```

## 🔄 Roadmap

- Aggiornamento completo test automatici per MySQL
- Aggiunta autenticazione JWT
- Documentazione API con Swagger/OpenAPI
- Miglioramento logging e gestione errori
- Deploy su cloud

## 📄 .gitignore

Questo progetto include un file `.gitignore` per evitare di caricare su GitHub file sensibili o inutili:

- `.env` e varianti
- `node_modules/`
- log, cache, file temporanei

## 📜 Licenza

Questo progetto è distribuito con licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

## 👥 Contributi

Contributi, segnalazioni di bug e richieste di funzionalità sono benvenuti! Apri una issue o una pull request.

---

Creato con 🌱 per la comunità dei Gruppi di Acquisto Solidale e chi crede in un cibo più sostenibile.js
- MySQL
- Testing: Mocha, Chai, Sinon

## Avvio rapido

1# 🥦 Planty of Food GAS API

Planty of Food è un backend RESTful per la gestione di Gruppi di Acquisto Solidale (GAS), pensato per piattaforme di e-commerce sostenibile. Permette la gestione di prodotti, utenti e ordini tramite API sicure e moderne, con database MySQL.

## ✨ Funzionalità Principali

- **Gestione Prodotti**: CRUD completo per prodotti alimentari
- **Gestione Utenti**: CRUD utenti con validazione email e dati anagrafici
- **Gestione Ordini**: CRUD ordini con associazione a prodotti e utenti, filtri avanzati
- **Validazione Input**: Sicurezza contro SQL injection e dati errati tramite express-validator
- **Gestione Errori**: Risposte API coerenti e dettagliate
- **Test Automatici**: (in aggiornamento) per tutte le entità principali

## 🛠️ Tecnologie Utilizzate

- **Backend**: Node.js, Express.js
- **Database**: MySQL (gestito tramite Sequelize ORM)
- **Validazione**: express-validator
- **Testing**: Mocha, Chai, Supertest
- **Gestione ambiente**: dotenv

## 🚀 Installazione e Utilizzo

> **Attenzione:** Il file `.env` NON va caricato su GitHub. Usa `.env.example` come base e aggiungi i tuoi segreti solo in locale.

### Requisiti Preliminari

- Node.js (v14.x o superiore)
- npm (v6.x o superiore)
- MySQL (locale o su XAMPP, porta 3306)

### Passaggi per l'Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/AntoDev00/PlantyOfFood.git
   cd pof-gas-api
   ```
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Configura il file `.env`:
   Copia `.env.example` in `.env` e inserisci i parametri del tuo MySQL:
   ```env
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_DATABASE=pof_gas
   MYSQL_USER=root
   MYSQL_PASSWORD=
   PORT=3000
   ```
4. Crea il database e le tabelle:
   - Avvia MySQL (es. tramite XAMPP)
   - Crea il database `pof_gas`
   - Importa il file `migrations.sql` (da phpMyAdmin o terminale)
5. Avvia il server:
   ```bash
   npm start
   ```
   Il server sarà attivo su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
POF Planty of Food/
├── src/
│   ├── app.js
│   ├── db.js
│   ├── models/
│   │   ├── Prodotto.js
│   │   ├── Utente.js
│   │   ├── Ordine.js
│   │   └── index.js
│   ├── routes/
│   │   ├── prodotti.js
│   │   ├── utenti.js
│   │   └── ordini.js
├── test/
│   ├── prodotti.test.js
│   ├── utenti.test.js
│   └── ordini.test.js
├── migrations.sql
├── package.json
├── .env         # Solo locale, NON versionare.example
└── README.md
```

## 📱 Come Utilizzare le API

1. **Prodotti**
   - `GET /api/prodotti` — Elenco prodotti
   - `POST /api/prodotti` — Crea prodotto
   - `PUT /api/prodotti/:id` — Modifica prodotto
   - `DELETE /api/prodotti/:id` — Cancella prodotto
2. **Utenti**
   - `GET /api/utenti` — Elenco utenti
   - `POST /api/utenti` — Crea utente
   - `PUT /api/utenti/:id` — Modifica utente
   - `DELETE /api/utenti/:id` — Cancella utente
3. **Ordini**
   - `GET /api/ordini` — Elenco ordini (con filtri)
   - `POST /api/ordini` — Crea ordine
   - `PUT /api/ordini/:id` — Modifica ordine
   - `DELETE /api/ordini/:id` — Cancella ordine

## 🔒 Sicurezza & Best Practice

- Tutte le query sono parametrizzate tramite Sequelize (ORM)
- Validazione input con express-validator
- Gestione centralizzata degli errori
- Nessuna password o dato sensibile hardcoded

## 🧪 Test Automatici

- I test automatici sono in fase di aggiornamento per MySQL/Sequelize.
- Esegui i test con:
  ```bash
  npm test
  ```

## 🔄 Roadmap

- Aggiornamento completo test automatici per MySQL
- Aggiunta autenticazione JWT
- Documentazione API con Swagger/OpenAPI
- Miglioramento logging e gestione errori
- Deploy su cloud

## 📄 .gitignore

Questo progetto include un file `.gitignore` per evitare di caricare su GitHub file sensibili o inutili:

- `.env` e varianti
- `node_modules/`
- log, cache, file temporanei

## 📜 Licenza

Questo progetto è distribuito con licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

## 👥 Contributi

Contributi, segnalazioni di bug e richieste di funzionalità sono benvenuti! Apri una issue o una pull request.

---

Creato con 🌱 per la comunità dei Gruppi di Acquisto Solidale e chi crede in un cibo più sostenibile. Copia `# 🥦 Planty of Food GAS API

Planty of Food è un backend RESTful per la gestione di Gruppi di Acquisto Solidale (GAS), pensato per piattaforme di e-commerce sostenibile. Permette la gestione di prodotti, utenti e ordini tramite API sicure e moderne, con database MySQL.

## ✨ Funzionalità Principali

- **Gestione Prodotti**: CRUD completo per prodotti alimentari
- **Gestione Utenti**: CRUD utenti con validazione email e dati anagrafici
- **Gestione Ordini**: CRUD ordini con associazione a prodotti e utenti, filtri avanzati
- **Validazione Input**: Sicurezza contro SQL injection e dati errati tramite express-validator
- **Gestione Errori**: Risposte API coerenti e dettagliate
- **Test Automatici**: (in aggiornamento) per tutte le entità principali

## 🛠️ Tecnologie Utilizzate

- **Backend**: Node.js, Express.js
- **Database**: MySQL (gestito tramite Sequelize ORM)
- **Validazione**: express-validator
- **Testing**: Mocha, Chai, Supertest
- **Gestione ambiente**: dotenv

## 🚀 Installazione e Utilizzo

> **Attenzione:** Il file `.env` NON va caricato su GitHub. Usa `.env.example` come base e aggiungi i tuoi segreti solo in locale.

### Requisiti Preliminari

- Node.js (v14.x o superiore)
- npm (v6.x o superiore)
- MySQL (locale o su XAMPP, porta 3306)

### Passaggi per l'Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/AntoDev00/PlantyOfFood.git
   cd pof-gas-api
   ```
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Configura il file `.env`:
   Copia `.env.example` in `.env` e inserisci i parametri del tuo MySQL:
   ```env
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_DATABASE=pof_gas
   MYSQL_USER=root
   MYSQL_PASSWORD=
   PORT=3000
   ```
4. Crea il database e le tabelle:
   - Avvia MySQL (es. tramite XAMPP)
   - Crea il database `pof_gas`
   - Importa il file `migrations.sql` (da phpMyAdmin o terminale)
5. Avvia il server:
   ```bash
   npm start
   ```
   Il server sarà attivo su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
POF Planty of Food/
├── src/
│   ├── app.js
│   ├── db.js
│   ├── models/
│   │   ├── Prodotto.js
│   │   ├── Utente.js
│   │   ├── Ordine.js
│   │   └── index.js
│   ├── routes/
│   │   ├── prodotti.js
│   │   ├── utenti.js
│   │   └── ordini.js
├── test/
│   ├── prodotti.test.js
│   ├── utenti.test.js
│   └── ordini.test.js
├── migrations.sql
├── package.json
├── .env         # Solo locale, NON versionare.example
└── README.md
```

## 📱 Come Utilizzare le API

1. **Prodotti**
   - `GET /api/prodotti` — Elenco prodotti
   - `POST /api/prodotti` — Crea prodotto
   - `PUT /api/prodotti/:id` — Modifica prodotto
   - `DELETE /api/prodotti/:id` — Cancella prodotto
2. **Utenti**
   - `GET /api/utenti` — Elenco utenti
   - `POST /api/utenti` — Crea utente
   - `PUT /api/utenti/:id` — Modifica utente
   - `DELETE /api/utenti/:id` — Cancella utente
3. **Ordini**
   - `GET /api/ordini` — Elenco ordini (con filtri)
   - `POST /api/ordini` — Crea ordine
   - `PUT /api/ordini/:id` — Modifica ordine
   - `DELETE /api/ordini/:id` — Cancella ordine

## 🔒 Sicurezza & Best Practice

- Tutte le query sono parametrizzate tramite Sequelize (ORM)
- Validazione input con express-validator
- Gestione centralizzata degli errori
- Nessuna password o dato sensibile hardcoded

## 🧪 Test Automatici

- I test automatici sono in fase di aggiornamento per MySQL/Sequelize.
- Esegui i test con:
  ```bash
  npm test
  ```

## 🔄 Roadmap

- Aggiornamento completo test automatici per MySQL
- Aggiunta autenticazione JWT
- Documentazione API con Swagger/OpenAPI
- Miglioramento logging e gestione errori
- Deploy su cloud

## 📄 .gitignore

Questo progetto include un file `.gitignore` per evitare di caricare su GitHub file sensibili o inutili:

- `.env` e varianti
- `node_modules/`
- log, cache, file temporanei

## 📜 Licenza

Questo progetto è distribuito con licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

## 👥 Contributi

Contributi, segnalazioni di bug e richieste di funzionalità sono benvenuti! Apri una issue o una pull request.

---

Creato con 🌱 per la comunità dei Gruppi di Acquisto Solidale e chi crede in un cibo più sostenibile.env# 🥦 Planty of Food GAS API

Planty of Food è un backend RESTful per la gestione di Gruppi di Acquisto Solidale (GAS), pensato per piattaforme di e-commerce sostenibile. Permette la gestione di prodotti, utenti e ordini tramite API sicure e moderne, con database MySQL.

## ✨ Funzionalità Principali

- **Gestione Prodotti**: CRUD completo per prodotti alimentari
- **Gestione Utenti**: CRUD utenti con validazione email e dati anagrafici
- **Gestione Ordini**: CRUD ordini con associazione a prodotti e utenti, filtri avanzati
- **Validazione Input**: Sicurezza contro SQL injection e dati errati tramite express-validator
- **Gestione Errori**: Risposte API coerenti e dettagliate
- **Test Automatici**: (in aggiornamento) per tutte le entità principali

## 🛠️ Tecnologie Utilizzate

- **Backend**: Node.js, Express.js
- **Database**: MySQL (gestito tramite Sequelize ORM)
- **Validazione**: express-validator
- **Testing**: Mocha, Chai, Supertest
- **Gestione ambiente**: dotenv

## 🚀 Installazione e Utilizzo

> **Attenzione:** Il file `.env` NON va caricato su GitHub. Usa `.env.example` come base e aggiungi i tuoi segreti solo in locale.

### Requisiti Preliminari

- Node.js (v14.x o superiore)
- npm (v6.x o superiore)
- MySQL (locale o su XAMPP, porta 3306)

### Passaggi per l'Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/AntoDev00/PlantyOfFood.git
   cd pof-gas-api
   ```
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Configura il file `.env`:
   Copia `.env.example` in `.env` e inserisci i parametri del tuo MySQL:
   ```env
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_DATABASE=pof_gas
   MYSQL_USER=root
   MYSQL_PASSWORD=
   PORT=3000
   ```
4. Crea il database e le tabelle:
   - Avvia MySQL (es. tramite XAMPP)
   - Crea il database `pof_gas`
   - Importa il file `migrations.sql` (da phpMyAdmin o terminale)
5. Avvia il server:
   ```bash
   npm start
   ```
   Il server sarà attivo su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
POF Planty of Food/
├── src/
│   ├── app.js
│   ├── db.js
│   ├── models/
│   │   ├── Prodotto.js
│   │   ├── Utente.js
│   │   ├── Ordine.js
│   │   └── index.js
│   ├── routes/
│   │   ├── prodotti.js
│   │   ├── utenti.js
│   │   └── ordini.js
├── test/
│   ├── prodotti.test.js
│   ├── utenti.test.js
│   └── ordini.test.js
├── migrations.sql
├── package.json
├── .env         # Solo locale, NON versionare.example
└── README.md
```

## 📱 Come Utilizzare le API

1. **Prodotti**
   - `GET /api/prodotti` — Elenco prodotti
   - `POST /api/prodotti` — Crea prodotto
   - `PUT /api/prodotti/:id` — Modifica prodotto
   - `DELETE /api/prodotti/:id` — Cancella prodotto
2. **Utenti**
   - `GET /api/utenti` — Elenco utenti
   - `POST /api/utenti` — Crea utente
   - `PUT /api/utenti/:id` — Modifica utente
   - `DELETE /api/utenti/:id` — Cancella utente
3. **Ordini**
   - `GET /api/ordini` — Elenco ordini (con filtri)
   - `POST /api/ordini` — Crea ordine
   - `PUT /api/ordini/:id` — Modifica ordine
   - `DELETE /api/ordini/:id` — Cancella ordine

## 🔒 Sicurezza & Best Practice

- Tutte le query sono parametrizzate tramite Sequelize (ORM)
- Validazione input con express-validator
- Gestione centralizzata degli errori
- Nessuna password o dato sensibile hardcoded

## 🧪 Test Automatici

- I test automatici sono in fase di aggiornamento per MySQL/Sequelize.
- Esegui i test con:
  ```bash
  npm test
  ```

## 🔄 Roadmap

- Aggiornamento completo test automatici per MySQL
- Aggiunta autenticazione JWT
- Documentazione API con Swagger/OpenAPI
- Miglioramento logging e gestione errori
- Deploy su cloud

## 📄 .gitignore

Questo progetto include un file `.gitignore` per evitare di caricare su GitHub file sensibili o inutili:

- `.env` e varianti
- `node_modules/`
- log, cache, file temporanei

## 📜 Licenza

Questo progetto è distribuito con licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

## 👥 Contributi

Contributi, segnalazioni di bug e richieste di funzionalità sono benvenuti! Apri una issue o una pull request.

---

Creato con 🌱 per la comunità dei Gruppi di Acquisto Solidale e chi crede in un cibo più sostenibile.example` in `# 🥦 Planty of Food GAS API

Planty of Food è un backend RESTful per la gestione di Gruppi di Acquisto Solidale (GAS), pensato per piattaforme di e-commerce sostenibile. Permette la gestione di prodotti, utenti e ordini tramite API sicure e moderne, con database MySQL.

## ✨ Funzionalità Principali

- **Gestione Prodotti**: CRUD completo per prodotti alimentari
- **Gestione Utenti**: CRUD utenti con validazione email e dati anagrafici
- **Gestione Ordini**: CRUD ordini con associazione a prodotti e utenti, filtri avanzati
- **Validazione Input**: Sicurezza contro SQL injection e dati errati tramite express-validator
- **Gestione Errori**: Risposte API coerenti e dettagliate
- **Test Automatici**: (in aggiornamento) per tutte le entità principali

## 🛠️ Tecnologie Utilizzate

- **Backend**: Node.js, Express.js
- **Database**: MySQL (gestito tramite Sequelize ORM)
- **Validazione**: express-validator
- **Testing**: Mocha, Chai, Supertest
- **Gestione ambiente**: dotenv

## 🚀 Installazione e Utilizzo

> **Attenzione:** Il file `.env` NON va caricato su GitHub. Usa `.env.example` come base e aggiungi i tuoi segreti solo in locale.

### Requisiti Preliminari

- Node.js (v14.x o superiore)
- npm (v6.x o superiore)
- MySQL (locale o su XAMPP, porta 3306)

### Passaggi per l'Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/AntoDev00/PlantyOfFood.git
   cd pof-gas-api
   ```
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Configura il file `.env`:
   Copia `.env.example` in `.env` e inserisci i parametri del tuo MySQL:
   ```env
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_DATABASE=pof_gas
   MYSQL_USER=root
   MYSQL_PASSWORD=
   PORT=3000
   ```
4. Crea il database e le tabelle:
   - Avvia MySQL (es. tramite XAMPP)
   - Crea il database `pof_gas`
   - Importa il file `migrations.sql` (da phpMyAdmin o terminale)
5. Avvia il server:
   ```bash
   npm start
   ```
   Il server sarà attivo su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
POF Planty of Food/
├── src/
│   ├── app.js
│   ├── db.js
│   ├── models/
│   │   ├── Prodotto.js
│   │   ├── Utente.js
│   │   ├── Ordine.js
│   │   └── index.js
│   ├── routes/
│   │   ├── prodotti.js
│   │   ├── utenti.js
│   │   └── ordini.js
├── test/
│   ├── prodotti.test.js
│   ├── utenti.test.js
│   └── ordini.test.js
├── migrations.sql
├── package.json
├── .env         # Solo locale, NON versionare.example
└── README.md
```

## 📱 Come Utilizzare le API

1. **Prodotti**
   - `GET /api/prodotti` — Elenco prodotti
   - `POST /api/prodotti` — Crea prodotto
   - `PUT /api/prodotti/:id` — Modifica prodotto
   - `DELETE /api/prodotti/:id` — Cancella prodotto
2. **Utenti**
   - `GET /api/utenti` — Elenco utenti
   - `POST /api/utenti` — Crea utente
   - `PUT /api/utenti/:id` — Modifica utente
   - `DELETE /api/utenti/:id` — Cancella utente
3. **Ordini**
   - `GET /api/ordini` — Elenco ordini (con filtri)
   - `POST /api/ordini` — Crea ordine
   - `PUT /api/ordini/:id` — Modifica ordine
   - `DELETE /api/ordini/:id` — Cancella ordine

## 🔒 Sicurezza & Best Practice

- Tutte le query sono parametrizzate tramite Sequelize (ORM)
- Validazione input con express-validator
- Gestione centralizzata degli errori
- Nessuna password o dato sensibile hardcoded

## 🧪 Test Automatici

- I test automatici sono in fase di aggiornamento per MySQL/Sequelize.
- Esegui i test con:
  ```bash
  npm test
  ```

## 🔄 Roadmap

- Aggiornamento completo test automatici per MySQL
- Aggiunta autenticazione JWT
- Documentazione API con Swagger/OpenAPI
- Miglioramento logging e gestione errori
- Deploy su cloud

## 📄 .gitignore

Questo progetto include un file `.gitignore` per evitare di caricare su GitHub file sensibili o inutili:

- `.env` e varianti
- `node_modules/`
- log, cache, file temporanei

## 📜 Licenza

Questo progetto è distribuito con licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

## 👥 Contributi

Contributi, segnalazioni di bug e richieste di funzionalità sono benvenuti! Apri una issue o una pull request.

---

Creato con 🌱 per la comunità dei Gruppi di Acquisto Solidale e chi crede in un cibo più sostenibile.env` e configura la stringa di connessione MySQL# 🥦 Planty of Food GAS API

Planty of Food è un backend RESTful per la gestione di Gruppi di Acquisto Solidale (GAS), pensato per piattaforme di e-commerce sostenibile. Permette la gestione di prodotti, utenti e ordini tramite API sicure e moderne, con database MySQL.

## ✨ Funzionalità Principali

- **Gestione Prodotti**: CRUD completo per prodotti alimentari
- **Gestione Utenti**: CRUD utenti con validazione email e dati anagrafici
- **Gestione Ordini**: CRUD ordini con associazione a prodotti e utenti, filtri avanzati
- **Validazione Input**: Sicurezza contro SQL injection e dati errati tramite express-validator
- **Gestione Errori**: Risposte API coerenti e dettagliate
- **Test Automatici**: (in aggiornamento) per tutte le entità principali

## 🛠️ Tecnologie Utilizzate

- **Backend**: Node.js, Express.js
- **Database**: MySQL (gestito tramite Sequelize ORM)
- **Validazione**: express-validator
- **Testing**: Mocha, Chai, Supertest
- **Gestione ambiente**: dotenv

## 🚀 Installazione e Utilizzo

> **Attenzione:** Il file `.env` NON va caricato su GitHub. Usa `.env.example` come base e aggiungi i tuoi segreti solo in locale.

### Requisiti Preliminari

- Node.js (v14.x o superiore)
- npm (v6.x o superiore)
- MySQL (locale o su XAMPP, porta 3306)

### Passaggi per l'Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/AntoDev00/PlantyOfFood.git
   cd pof-gas-api
   ```
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Configura il file `.env`:
   Copia `.env.example` in `.env` e inserisci i parametri del tuo MySQL:
   ```env
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_DATABASE=pof_gas
   MYSQL_USER=root
   MYSQL_PASSWORD=
   PORT=3000
   ```
4. Crea il database e le tabelle:
   - Avvia MySQL (es. tramite XAMPP)
   - Crea il database `pof_gas`
   - Importa il file `migrations.sql` (da phpMyAdmin o terminale)
5. Avvia il server:
   ```bash
   npm start
   ```
   Il server sarà attivo su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
POF Planty of Food/
├── src/
│   ├── app.js
│   ├── db.js
│   ├── models/
│   │   ├── Prodotto.js
│   │   ├── Utente.js
│   │   ├── Ordine.js
│   │   └── index.js
│   ├── routes/
│   │   ├── prodotti.js
│   │   ├── utenti.js
│   │   └── ordini.js
├── test/
│   ├── prodotti.test.js
│   ├── utenti.test.js
│   └── ordini.test.js
├── migrations.sql
├── package.json
├── .env         # Solo locale, NON versionare.example
└── README.md
```

## 📱 Come Utilizzare le API

1. **Prodotti**
   - `GET /api/prodotti` — Elenco prodotti
   - `POST /api/prodotti` — Crea prodotto
   - `PUT /api/prodotti/:id` — Modifica prodotto
   - `DELETE /api/prodotti/:id` — Cancella prodotto
2. **Utenti**
   - `GET /api/utenti` — Elenco utenti
   - `POST /api/utenti` — Crea utente
   - `PUT /api/utenti/:id` — Modifica utente
   - `DELETE /api/utenti/:id` — Cancella utente
3. **Ordini**
   - `GET /api/ordini` — Elenco ordini (con filtri)
   - `POST /api/ordini` — Crea ordine
   - `PUT /api/ordini/:id` — Modifica ordine
   - `DELETE /api/ordini/:id` — Cancella ordine

## 🔒 Sicurezza & Best Practice

- Tutte le query sono parametrizzate tramite Sequelize (ORM)
- Validazione input con express-validator
- Gestione centralizzata degli errori
- Nessuna password o dato sensibile hardcoded

## 🧪 Test Automatici

- I test automatici sono in fase di aggiornamento per MySQL/Sequelize.
- Esegui i test con:
  ```bash
  npm test
  ```

## 🔄 Roadmap

- Aggiornamento completo test automatici per MySQL
- Aggiunta autenticazione JWT
- Documentazione API con Swagger/OpenAPI
- Miglioramento logging e gestione errori
- Deploy su cloud

## 📄 .gitignore

Questo progetto include un file `.gitignore` per evitare di caricare su GitHub file sensibili o inutili:

- `.env` e varianti
- `node_modules/`
- log, cache, file temporanei

## 📜 Licenza

Questo progetto è distribuito con licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

## 👥 Contributi

Contributi, segnalazioni di bug e richieste di funzionalità sono benvenuti! Apri una issue o una pull request.

---

Creato con 🌱 per la comunità dei Gruppi di Acquisto Solidale e chi crede in un cibo più sostenibile.
2# 🥦 Planty of Food GAS API

Planty of Food è un backend RESTful per la gestione di Gruppi di Acquisto Solidale (GAS), pensato per piattaforme di e-commerce sostenibile. Permette la gestione di prodotti, utenti e ordini tramite API sicure e moderne, con database MySQL.

## ✨ Funzionalità Principali

- **Gestione Prodotti**: CRUD completo per prodotti alimentari
- **Gestione Utenti**: CRUD utenti con validazione email e dati anagrafici
- **Gestione Ordini**: CRUD ordini con associazione a prodotti e utenti, filtri avanzati
- **Validazione Input**: Sicurezza contro SQL injection e dati errati tramite express-validator
- **Gestione Errori**: Risposte API coerenti e dettagliate
- **Test Automatici**: (in aggiornamento) per tutte le entità principali

## 🛠️ Tecnologie Utilizzate

- **Backend**: Node.js, Express.js
- **Database**: MySQL (gestito tramite Sequelize ORM)
- **Validazione**: express-validator
- **Testing**: Mocha, Chai, Supertest
- **Gestione ambiente**: dotenv

## 🚀 Installazione e Utilizzo

> **Attenzione:** Il file `.env` NON va caricato su GitHub. Usa `.env.example` come base e aggiungi i tuoi segreti solo in locale.

### Requisiti Preliminari

- Node.js (v14.x o superiore)
- npm (v6.x o superiore)
- MySQL (locale o su XAMPP, porta 3306)

### Passaggi per l'Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/AntoDev00/PlantyOfFood.git
   cd pof-gas-api
   ```
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Configura il file `.env`:
   Copia `.env.example` in `.env` e inserisci i parametri del tuo MySQL:
   ```env
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_DATABASE=pof_gas
   MYSQL_USER=root
   MYSQL_PASSWORD=
   PORT=3000
   ```
4. Crea il database e le tabelle:
   - Avvia MySQL (es. tramite XAMPP)
   - Crea il database `pof_gas`
   - Importa il file `migrations.sql` (da phpMyAdmin o terminale)
5. Avvia il server:
   ```bash
   npm start
   ```
   Il server sarà attivo su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
POF Planty of Food/
├── src/
│   ├── app.js
│   ├── db.js
│   ├── models/
│   │   ├── Prodotto.js
│   │   ├── Utente.js
│   │   ├── Ordine.js
│   │   └── index.js
│   ├── routes/
│   │   ├── prodotti.js
│   │   ├── utenti.js
│   │   └── ordini.js
├── test/
│   ├── prodotti.test.js
│   ├── utenti.test.js
│   └── ordini.test.js
├── migrations.sql
├── package.json
├── .env         # Solo locale, NON versionare.example
└── README.md
```

## 📱 Come Utilizzare le API

1. **Prodotti**
   - `GET /api/prodotti` — Elenco prodotti
   - `POST /api/prodotti` — Crea prodotto
   - `PUT /api/prodotti/:id` — Modifica prodotto
   - `DELETE /api/prodotti/:id` — Cancella prodotto
2. **Utenti**
   - `GET /api/utenti` — Elenco utenti
   - `POST /api/utenti` — Crea utente
   - `PUT /api/utenti/:id` — Modifica utente
   - `DELETE /api/utenti/:id` — Cancella utente
3. **Ordini**
   - `GET /api/ordini` — Elenco ordini (con filtri)
   - `POST /api/ordini` — Crea ordine
   - `PUT /api/ordini/:id` — Modifica ordine
   - `DELETE /api/ordini/:id` — Cancella ordine

## 🔒 Sicurezza & Best Practice

- Tutte le query sono parametrizzate tramite Sequelize (ORM)
- Validazione input con express-validator
- Gestione centralizzata degli errori
- Nessuna password o dato sensibile hardcoded

## 🧪 Test Automatici

- I test automatici sono in fase di aggiornamento per MySQL/Sequelize.
- Esegui i test con:
  ```bash
  npm test
  ```

## 🔄 Roadmap

- Aggiornamento completo test automatici per MySQL
- Aggiunta autenticazione JWT
- Documentazione API con Swagger/OpenAPI
- Miglioramento logging e gestione errori
- Deploy su cloud

## 📄 .gitignore

Questo progetto include un file `.gitignore` per evitare di caricare su GitHub file sensibili o inutili:

- `.env` e varianti
- `node_modules/`
- log, cache, file temporanei

## 📜 Licenza

Questo progetto è distribuito con licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

## 👥 Contributi

Contributi, segnalazioni di bug e richieste di funzionalità sono benvenuti! Apri una issue o una pull request.

---

Creato con 🌱 per la comunità dei Gruppi di Acquisto Solidale e chi crede in un cibo più sostenibile. Installa le dipendenze:
   ```bash
   npm install
   ```
3# 🥦 Planty of Food GAS API

Planty of Food è un backend RESTful per la gestione di Gruppi di Acquisto Solidale (GAS), pensato per piattaforme di e-commerce sostenibile. Permette la gestione di prodotti, utenti e ordini tramite API sicure e moderne, con database MySQL.

## ✨ Funzionalità Principali

- **Gestione Prodotti**: CRUD completo per prodotti alimentari
- **Gestione Utenti**: CRUD utenti con validazione email e dati anagrafici
- **Gestione Ordini**: CRUD ordini con associazione a prodotti e utenti, filtri avanzati
- **Validazione Input**: Sicurezza contro SQL injection e dati errati tramite express-validator
- **Gestione Errori**: Risposte API coerenti e dettagliate
- **Test Automatici**: (in aggiornamento) per tutte le entità principali

## 🛠️ Tecnologie Utilizzate

- **Backend**: Node.js, Express.js
- **Database**: MySQL (gestito tramite Sequelize ORM)
- **Validazione**: express-validator
- **Testing**: Mocha, Chai, Supertest
- **Gestione ambiente**: dotenv

## 🚀 Installazione e Utilizzo

> **Attenzione:** Il file `.env` NON va caricato su GitHub. Usa `.env.example` come base e aggiungi i tuoi segreti solo in locale.

### Requisiti Preliminari

- Node.js (v14.x o superiore)
- npm (v6.x o superiore)
- MySQL (locale o su XAMPP, porta 3306)

### Passaggi per l'Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/AntoDev00/PlantyOfFood.git
   cd pof-gas-api
   ```
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Configura il file `.env`:
   Copia `.env.example` in `.env` e inserisci i parametri del tuo MySQL:
   ```env
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_DATABASE=pof_gas
   MYSQL_USER=root
   MYSQL_PASSWORD=
   PORT=3000
   ```
4. Crea il database e le tabelle:
   - Avvia MySQL (es. tramite XAMPP)
   - Crea il database `pof_gas`
   - Importa il file `migrations.sql` (da phpMyAdmin o terminale)
5. Avvia il server:
   ```bash
   npm start
   ```
   Il server sarà attivo su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
POF Planty of Food/
├── src/
│   ├── app.js
│   ├── db.js
│   ├── models/
│   │   ├── Prodotto.js
│   │   ├── Utente.js
│   │   ├── Ordine.js
│   │   └── index.js
│   ├── routes/
│   │   ├── prodotti.js
│   │   ├── utenti.js
│   │   └── ordini.js
├── test/
│   ├── prodotti.test.js
│   ├── utenti.test.js
│   └── ordini.test.js
├── migrations.sql
├── package.json
├── .env         # Solo locale, NON versionare.example
└── README.md
```

## 📱 Come Utilizzare le API

1. **Prodotti**
   - `GET /api/prodotti` — Elenco prodotti
   - `POST /api/prodotti` — Crea prodotto
   - `PUT /api/prodotti/:id` — Modifica prodotto
   - `DELETE /api/prodotti/:id` — Cancella prodotto
2. **Utenti**
   - `GET /api/utenti` — Elenco utenti
   - `POST /api/utenti` — Crea utente
   - `PUT /api/utenti/:id` — Modifica utente
   - `DELETE /api/utenti/:id` — Cancella utente
3. **Ordini**
   - `GET /api/ordini` — Elenco ordini (con filtri)
   - `POST /api/ordini` — Crea ordine
   - `PUT /api/ordini/:id` — Modifica ordine
   - `DELETE /api/ordini/:id` — Cancella ordine

## 🔒 Sicurezza & Best Practice

- Tutte le query sono parametrizzate tramite Sequelize (ORM)
- Validazione input con express-validator
- Gestione centralizzata degli errori
- Nessuna password o dato sensibile hardcoded

## 🧪 Test Automatici

- I test automatici sono in fase di aggiornamento per MySQL/Sequelize.
- Esegui i test con:
  ```bash
  npm test
  ```

## 🔄 Roadmap

- Aggiornamento completo test automatici per MySQL
- Aggiunta autenticazione JWT
- Documentazione API con Swagger/OpenAPI
- Miglioramento logging e gestione errori
- Deploy su cloud

## 📄 .gitignore

Questo progetto include un file `.gitignore` per evitare di caricare su GitHub file sensibili o inutili:

- `.env` e varianti
- `node_modules/`
- log, cache, file temporanei

## 📜 Licenza

Questo progetto è distribuito con licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

## 👥 Contributi

Contributi, segnalazioni di bug e richieste di funzionalità sono benvenuti! Apri una issue o una pull request.

---

Creato con 🌱 per la comunità dei Gruppi di Acquisto Solidale e chi crede in un cibo più sostenibile. Avvia il server:
   ```bash
   npm run dev
   ```
4# 🥦 Planty of Food GAS API

Planty of Food è un backend RESTful per la gestione di Gruppi di Acquisto Solidale (GAS), pensato per piattaforme di e-commerce sostenibile. Permette la gestione di prodotti, utenti e ordini tramite API sicure e moderne, con database MySQL.

## ✨ Funzionalità Principali

- **Gestione Prodotti**: CRUD completo per prodotti alimentari
- **Gestione Utenti**: CRUD utenti con validazione email e dati anagrafici
- **Gestione Ordini**: CRUD ordini con associazione a prodotti e utenti, filtri avanzati
- **Validazione Input**: Sicurezza contro SQL injection e dati errati tramite express-validator
- **Gestione Errori**: Risposte API coerenti e dettagliate
- **Test Automatici**: (in aggiornamento) per tutte le entità principali

## 🛠️ Tecnologie Utilizzate

- **Backend**: Node.js, Express.js
- **Database**: MySQL (gestito tramite Sequelize ORM)
- **Validazione**: express-validator
- **Testing**: Mocha, Chai, Supertest
- **Gestione ambiente**: dotenv

## 🚀 Installazione e Utilizzo

> **Attenzione:** Il file `.env` NON va caricato su GitHub. Usa `.env.example` come base e aggiungi i tuoi segreti solo in locale.

### Requisiti Preliminari

- Node.js (v14.x o superiore)
- npm (v6.x o superiore)
- MySQL (locale o su XAMPP, porta 3306)

### Passaggi per l'Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/AntoDev00/PlantyOfFood.git
   cd pof-gas-api
   ```
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Configura il file `.env`:
   Copia `.env.example` in `.env` e inserisci i parametri del tuo MySQL:
   ```env
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_DATABASE=pof_gas
   MYSQL_USER=root
   MYSQL_PASSWORD=
   PORT=3000
   ```
4. Crea il database e le tabelle:
   - Avvia MySQL (es. tramite XAMPP)
   - Crea il database `pof_gas`
   - Importa il file `migrations.sql` (da phpMyAdmin o terminale)
5. Avvia il server:
   ```bash
   npm start
   ```
   Il server sarà attivo su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
POF Planty of Food/
├── src/
│   ├── app.js
│   ├── db.js
│   ├── models/
│   │   ├── Prodotto.js
│   │   ├── Utente.js
│   │   ├── Ordine.js
│   │   └── index.js
│   ├── routes/
│   │   ├── prodotti.js
│   │   ├── utenti.js
│   │   └── ordini.js
├── test/
│   ├── prodotti.test.js
│   ├── utenti.test.js
│   └── ordini.test.js
├── migrations.sql
├── package.json
├── .env         # Solo locale, NON versionare.example
└── README.md
```

## 📱 Come Utilizzare le API

1. **Prodotti**
   - `GET /api/prodotti` — Elenco prodotti
   - `POST /api/prodotti` — Crea prodotto
   - `PUT /api/prodotti/:id` — Modifica prodotto
   - `DELETE /api/prodotti/:id` — Cancella prodotto
2. **Utenti**
   - `GET /api/utenti` — Elenco utenti
   - `POST /api/utenti` — Crea utente
   - `PUT /api/utenti/:id` — Modifica utente
   - `DELETE /api/utenti/:id` — Cancella utente
3. **Ordini**
   - `GET /api/ordini` — Elenco ordini (con filtri)
   - `POST /api/ordini` — Crea ordine
   - `PUT /api/ordini/:id` — Modifica ordine
   - `DELETE /api/ordini/:id` — Cancella ordine

## 🔒 Sicurezza & Best Practice

- Tutte le query sono parametrizzate tramite Sequelize (ORM)
- Validazione input con express-validator
- Gestione centralizzata degli errori
- Nessuna password o dato sensibile hardcoded

## 🧪 Test Automatici

- I test automatici sono in fase di aggiornamento per MySQL/Sequelize.
- Esegui i test con:
  ```bash
  npm test
  ```

## 🔄 Roadmap

- Aggiornamento completo test automatici per MySQL
- Aggiunta autenticazione JWT
- Documentazione API con Swagger/OpenAPI
- Miglioramento logging e gestione errori
- Deploy su cloud

## 📄 .gitignore

Questo progetto include un file `.gitignore` per evitare di caricare su GitHub file sensibili o inutili:

- `.env` e varianti
- `node_modules/`
- log, cache, file temporanei

## 📜 Licenza

Questo progetto è distribuito con licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

## 👥 Contributi

Contributi, segnalazioni di bug e richieste di funzionalità sono benvenuti! Apri una issue o una pull request.

---

Creato con 🌱 per la comunità dei Gruppi di Acquisto Solidale e chi crede in un cibo più sostenibile. Esegui i test:
   ```bash
   npm test
   ```

## API principali
- CRUD Prodotti
- CRUD Utenti
- CRUD Ordini (con filtri per data e prodotti)

## Sicurezza
- Validazione input
- Prevenzione NoSQL Injection

## Struttura progetto
- `src/models/`: Modelli Mongoose
- `src/controllers/`: Logica API
- `src/routes/`: Rotte Express
- `src/app# 🥦 Planty of Food GAS API

Planty of Food è un backend RESTful per la gestione di Gruppi di Acquisto Solidale (GAS), pensato per piattaforme di e-commerce sostenibile. Permette la gestione di prodotti, utenti e ordini tramite API sicure e moderne, con database MySQL.

## ✨ Funzionalità Principali

- **Gestione Prodotti**: CRUD completo per prodotti alimentari
- **Gestione Utenti**: CRUD utenti con validazione email e dati anagrafici
- **Gestione Ordini**: CRUD ordini con associazione a prodotti e utenti, filtri avanzati
- **Validazione Input**: Sicurezza contro SQL injection e dati errati tramite express-validator
- **Gestione Errori**: Risposte API coerenti e dettagliate
- **Test Automatici**: (in aggiornamento) per tutte le entità principali

## 🛠️ Tecnologie Utilizzate

- **Backend**: Node.js, Express.js
- **Database**: MySQL (gestito tramite Sequelize ORM)
- **Validazione**: express-validator
- **Testing**: Mocha, Chai, Supertest
- **Gestione ambiente**: dotenv

## 🚀 Installazione e Utilizzo

> **Attenzione:** Il file `.env` NON va caricato su GitHub. Usa `.env.example` come base e aggiungi i tuoi segreti solo in locale.

### Requisiti Preliminari

- Node.js (v14.x o superiore)
- npm (v6.x o superiore)
- MySQL (locale o su XAMPP, porta 3306)

### Passaggi per l'Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/AntoDev00/PlantyOfFood.git
   cd pof-gas-api
   ```
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Configura il file `.env`:
   Copia `.env.example` in `.env` e inserisci i parametri del tuo MySQL:
   ```env
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_DATABASE=pof_gas
   MYSQL_USER=root
   MYSQL_PASSWORD=
   PORT=3000
   ```
4. Crea il database e le tabelle:
   - Avvia MySQL (es. tramite XAMPP)
   - Crea il database `pof_gas`
   - Importa il file `migrations.sql` (da phpMyAdmin o terminale)
5. Avvia il server:
   ```bash
   npm start
   ```
   Il server sarà attivo su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
POF Planty of Food/
├── src/
│   ├── app.js
│   ├── db.js
│   ├── models/
│   │   ├── Prodotto.js
│   │   ├── Utente.js
│   │   ├── Ordine.js
│   │   └── index.js
│   ├── routes/
│   │   ├── prodotti.js
│   │   ├── utenti.js
│   │   └── ordini.js
├── test/
│   ├── prodotti.test.js
│   ├── utenti.test.js
│   └── ordini.test.js
├── migrations.sql
├── package.json
├── .env         # Solo locale, NON versionare.example
└── README.md
```

## 📱 Come Utilizzare le API

1. **Prodotti**
   - `GET /api/prodotti` — Elenco prodotti
   - `POST /api/prodotti` — Crea prodotto
   - `PUT /api/prodotti/:id` — Modifica prodotto
   - `DELETE /api/prodotti/:id` — Cancella prodotto
2. **Utenti**
   - `GET /api/utenti` — Elenco utenti
   - `POST /api/utenti` — Crea utente
   - `PUT /api/utenti/:id` — Modifica utente
   - `DELETE /api/utenti/:id` — Cancella utente
3. **Ordini**
   - `GET /api/ordini` — Elenco ordini (con filtri)
   - `POST /api/ordini` — Crea ordine
   - `PUT /api/ordini/:id` — Modifica ordine
   - `DELETE /api/ordini/:id` — Cancella ordine

## 🔒 Sicurezza & Best Practice

- Tutte le query sono parametrizzate tramite Sequelize (ORM)
- Validazione input con express-validator
- Gestione centralizzata degli errori
- Nessuna password o dato sensibile hardcoded

## 🧪 Test Automatici

- I test automatici sono in fase di aggiornamento per MySQL/Sequelize.
- Esegui i test con:
  ```bash
  npm test
  ```

## 🔄 Roadmap

- Aggiornamento completo test automatici per MySQL
- Aggiunta autenticazione JWT
- Documentazione API con Swagger/OpenAPI
- Miglioramento logging e gestione errori
- Deploy su cloud

## 📄 .gitignore

Questo progetto include un file `.gitignore` per evitare di caricare su GitHub file sensibili o inutili:

- `.env` e varianti
- `node_modules/`
- log, cache, file temporanei

## 📜 Licenza

Questo progetto è distribuito con licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

## 👥 Contributi

Contributi, segnalazioni di bug e richieste di funzionalità sono benvenuti! Apri una issue o una pull request.

---

Creato con 🌱 per la comunità dei Gruppi di Acquisto Solidale e chi crede in un cibo più sostenibile.js`: Entrypoint
- `test/`: Test automatici
