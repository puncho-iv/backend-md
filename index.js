import { setupRoutes } from './src/routes.js';
import express from 'express';
import dotenv from 'dotenv'
import { sequelize, setupDb } from './src/repositories/postgres.js';

const isProd = process.env.NODE_ENV === 'production'
const ENV_FILEPATH = './.env'
const LOCAL_ENV_FILEPATH = './.env.local'
dotenv.config({ path: isProd ? ENV_FILEPATH : LOCAL_ENV_FILEPATH })

const app = express();
app.use(express.json())

await setupDb();
setupRoutes(app)

const PORT = process.env.SERVER_PORT || 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

process.on('SIGTERM', () => {
  debug('SIGTERM signal received: closing HTTP server')
  sequelize && sequelize.close()
})
