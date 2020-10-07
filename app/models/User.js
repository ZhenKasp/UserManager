const sequelize = require('./sequelize.js')
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  username:{
    type: DataTypes.STRING,
    isAlphanumeric: true
  },
  firstname:{
    type: DataTypes.STRING,
    isAlphanumeric: true
  },
  lastname:{
    type: DataTypes.STRING,
    isAlphanumeric: true
  },
  email:{
    type: DataTypes.STRING,
    unique: {
      args: true,
      msg: 'User with email already exists.'
    },
    validate: {
      isEmail: {
        msg: 'Invalid Email.'
      }
    }
  },
  password:{
  type: DataTypes.STRING
  },
  status: {
  type: DataTypes.STRING,
  defaultValue: 'active'
  },
}, { 
  timestamps: true,
  createdAt: true,
  updatedAt: true
});

module.exports = User;