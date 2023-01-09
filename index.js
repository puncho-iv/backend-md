import { setupRoutes } from './src/routes.js';
import express from 'express';
import dotenv from 'dotenv'

const isProd = process.env.NODE_ENV === 'production'
const ENV_FILEPATH = './.env'
const LOCAL_ENV_FILEPATH = './.env.local'
dotenv.config({ path: isProd ? ENV_FILEPATH : LOCAL_ENV_FILEPATH })

const app = express();

setupRoutes(app)

const PORT = process.env.SERVER_PORT || 5000
app.listen (PORT, () => console.log(`Listening on port ${PORT}`))
