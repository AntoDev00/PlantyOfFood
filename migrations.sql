-- Struttura database POF GAS per MySQL

CREATE TABLE IF NOT EXISTS prodotti (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS utenti (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cognome VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS ordini (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dataInserimento DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS OrdineProdotto (
    ordine_id INT NOT NULL,
    prodotto_id INT NOT NULL,
    PRIMARY KEY (ordine_id, prodotto_id),
    FOREIGN KEY (ordine_id) REFERENCES ordini(id) ON DELETE CASCADE,
    FOREIGN KEY (prodotto_id) REFERENCES prodotti(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS OrdineUtente (
    ordine_id INT NOT NULL,
    utente_id INT NOT NULL,
    PRIMARY KEY (ordine_id, utente_id),
    FOREIGN KEY (ordine_id) REFERENCES ordini(id) ON DELETE CASCADE,
    FOREIGN KEY (utente_id) REFERENCES utenti(id) ON DELETE CASCADE
);
