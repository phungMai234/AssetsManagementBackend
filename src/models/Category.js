const db = require('../../database');
const { DataTypes } = require('sequelize');

const Category = db.define('User', {
  id_category: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  manage_by: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.INTEGER,
  },
});

Category.hasMany(db.model.Product, {
  foreignKey: 'id_product',
});

export default Category;
