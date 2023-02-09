/* eslint-disable @typescript-eslint/no-var-requires */
// will contain the DB entity for a movie
const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize("sqlite:memory");

const Movie = sequelize.define("Movie", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  origin_country:{
    type: DataTypes.STRING,
  },
  first_air_date: {
    type: DataTypes.DATE,
    allowNull:false
  }
});
