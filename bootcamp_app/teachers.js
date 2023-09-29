// Required Modules
require('dotenv').config();
const { Pool } = require('pg');
const { dbConfig } = require('./config');

// Database Connection
const pool = new Pool(dbConfig);

// User Input
const cohortName = process.argv[2];

// Parameterized Query
const query = `
  SELECT DISTINCT teachers.name
  FROM teachers
  JOIN assistances ON teachers.id = assistances.teacher_id
  JOIN students ON assistances.student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name = $1;
`;

// Execute Query
pool.query(query, [cohortName])
  .then(res => {
    console.log(`Teachers who assisted during ${cohortName}:`);
    res.rows.forEach(teacher => {
      console.log(teacher.name);
    });
  })
  .catch(err => console.error('query error', err.stack));
