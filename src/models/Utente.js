const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Utente = sequelize.define('Utente', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  cognome: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  }
}, {
  tableName: 'utenti',
  timestamps: false
});

// Relazione many-to-many con Ordine
Utente.associate = (models) => {
  Utente.belongsToMany(models.Ordine, {
    through: 'OrdineUtente',
    foreignKey: 'utente_id',
    otherKey: 'ordine_id',
    as: 'ordini'
  });
};

module.exports = Utente;
