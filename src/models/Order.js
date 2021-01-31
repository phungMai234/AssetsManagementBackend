const db = require('../../database');
const { DataTypes } = require('sequelize');

const Product = db.define('User', {
  id_order: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  order_date: {
    type: DataTypes.FLOAT,
  },
  quantity_order: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING,
  },
  comment: {
    type: DataTypes.STRING,
  },
  borrow_date: {
    type: DataTypes.STRING,
  },
  pay_date: {
    type: DataTypes.STRING,
  },
  amount_borrow: {
    type: DataTypes.INTEGER,
  },
  receipt_borrow: {
    type: DataTypes.INTEGER,
  },
  receipt_pay: {
    type: DataTypes.INTEGER,
  },
});

export default Product;
