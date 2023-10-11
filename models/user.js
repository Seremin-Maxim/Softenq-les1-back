// models/User.js
/*
const { DataTypes } = require('sequelize');
const sequelize = require('../config'); // Import your Sequelize instance

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Id: {
    type: DataTypes.INTEGER,
    allowNull:false,
    unique:false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:false,
  },
  createdAt:{
    type: DataTypes.DATE,
    allowNull: false,
    unique:false,
  }
});

User.hasMany(Post, { foreignKey: 'userId' });

module.exports = User;
*/