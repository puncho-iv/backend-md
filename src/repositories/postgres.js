import { Sequelize } from "sequelize";
import dotenv from "dotenv"

const isProd = process.env.NODE_ENV === 'production'
const ENV_FILEPATH = './.env'
const LOCAL_ENV_FILEPATH = './.env.local'
dotenv.config({ path: isProd ? ENV_FILEPATH : LOCAL_ENV_FILEPATH })

const sequelize = new Sequelize(process.env.DB_URL)

export async function setupDb() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    syncDbTables()
  } catch (err) {
    console.error('Unable to connect to the database:', error);
    // process.exitCode(1);
  }
}

async function syncDbTables() {
  await sequelize && sequelize.sync({ alter: true });
}

export {
  sequelize
}
