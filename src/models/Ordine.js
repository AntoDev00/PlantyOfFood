const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Ordine = sequelize.define('Ordine', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  dataInserimento: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'ordini',
  timestamps: false
});

// Relazione many-to-many con Prodotto e Utente
Ordine.associate = (models) => {
  Ordine.belongsToMany(models.Prodotto, {
    through: 'OrdineProdotto',
    foreignKey: 'ordine_id',
    otherKey: 'prodotto_id',
    as: 'prodotti'
  });
  Ordine.belongsToMany(models.Utente, {
    through: 'OrdineUtente',
    foreignKey: 'ordine_id',
    otherKey: 'utente_id',
    as: 'utenti'
  });
};

module.exports = Ordine;
