/* eslint-disable @typescript-eslint/no-var-requires */
// will contain the DB entity for a movie
// const { DataTypes } = require("sequelize");
// const { sequelize } = require("../repositories/postgres");

import { DataTypes } from "sequelize";
import { sequelize } from "../repositories/postgres.js";

// const sequelize = new Sequelize('backend-md', 'root', 'movieDB', {
//   dialect: 'mysql'
// })

const Movie = sequelize.define("Movie", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  origin_country: {
    type: DataTypes.STRING,
  },
  first_air_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

export {
  Movie
}

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }
