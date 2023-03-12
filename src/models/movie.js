/* eslint-disable @typescript-eslint/no-var-requires */
// will contain the DB entity for a movie
import { DataTypes } from "sequelize";
import {sequelize } from "../repositories/postgres.js"

const Movie = sequelize.define("Movie", {
  adult: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,

  },

  original_language: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  origin_title:{
    type: DataTypes.STRING,
    allowNull:false,
  },
  first_air_date: {
    type: DataTypes.DATE,
    allowNull:false
  }
});

export {
  Movie
}