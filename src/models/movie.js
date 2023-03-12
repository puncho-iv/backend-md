/* eslint-disable @typescript-eslint/no-var-requires */
// will contain the DB entity for a movie
const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize('backend-md', 'root', 'movieDB', {
  dialect: 'mysql'
})

const Movie = sequelize.define("Movie", {
  adult: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

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
    allowNull:false,
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
