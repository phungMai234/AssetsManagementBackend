const db = require('../../database');
const { DataTypes } = require('sequelize');

const Product = db.define('User', {
  id_product: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  quantity_in_stock: {
    type: DataTypes.INTEGER,
  },
  product_description: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  product_type: {
    type: DataTypes.STRING,
  },
});

Product.belongsToMany(db.model.User, { through: db.model.Order });

export default Product;
