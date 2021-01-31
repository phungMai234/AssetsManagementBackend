const db = require('../../database');
const { DataTypes } = require('sequelize');

const User = db.define('User', {
  id_user: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.NUMBER,
  },
  address: {
    type: DataTypes.STRING,
  },
});

User.belongsToMany(db.model.Product, { through: db.model.Order });
User.belongsTo(db.model.Role, {
  foreignKey: 'id_role',
});
export default User;
