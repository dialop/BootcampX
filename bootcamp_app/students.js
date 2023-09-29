// Require and configure dotenv to load environment variables from .env
require('dotenv').config();

const { Pool } = require('pg');
// Connect with file with sensitive information
const { dbConfig } = require('./config');

const pool = new Pool(dbConfig);

const cohortName = process.argv[2] || 'FEB'; // Default to 'FEB' if not provided
const limit = parseInt(process.argv[3]) || 5; // Default to 5 if not provided

// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`, limit];

// pool.connect() // You actually don't need to manually call connect before a query

// Add SQL query to retrieve data
pool.query(`
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2; 
`, values).then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  });
}).catch(err => console.error('query error', err.stack));











