// Require and configure dotenv to load environment variables from .env
require('dotenv').config();

const { Pool } = require('pg');
const { dbConfig } = require('./config');

const pool = new Pool(dbConfig);
