// config.js
module.exports = {
    dbConfig: {
      user: process.env.DB_USER || 'labber',
      password: process.env.DB_PASSWORD || 'labber',
      host: process.env.DB_HOST || 'localhost',
      database: process.env.DB_DATABASE || 'bootcampx',
    },
  };
  