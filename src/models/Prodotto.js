const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Prodotto = sequelize.define('Prodotto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'prodotti',
  timestamps: false
});

// Relazione many-to-many con Ordine
Prodotto.associate = (models) => {
  Prodotto.belongsToMany(models.Ordine, {
    through: 'OrdineProdotto',
    foreignKey: 'prodotto_id',
    otherKey: 'ordine_id',
    as: 'ordini'
  });
};

module.exports = Prodotto;
