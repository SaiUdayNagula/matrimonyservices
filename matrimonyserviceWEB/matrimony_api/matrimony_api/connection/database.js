const mysql = require('mysql');

const db = mysql.createConnection({
  host: ' matrimony.c12qigioo8ey.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: '$R%^.MMt230CFyt',
  database: 'matrimonyservices' // Replace with your database name
});

// const db = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'Shirisha95@#',
//   database: 'matrimonyservices' // Replace with your database name
//   ,port:'3306'
// });

db.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = db;
