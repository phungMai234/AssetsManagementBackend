const db = require('../../database');
const { DataTypes } = require('sequelize');

const Role = db.define('User', {
  id_role: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Role;
