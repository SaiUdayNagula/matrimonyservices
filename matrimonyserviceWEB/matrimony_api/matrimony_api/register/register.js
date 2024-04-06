const express = require('express');
const db = require('../connection/database'); // Adjust the path as necessary
const router = express.Router();

router.post('/', (req, res) => {
  // Here you can use req.body to dynamically get user input
  const { email, user_name, user_pwd, first_name, last_name, primary_phone, primary_phone_country, primary_phone_type, birth_date, gender, address_line1, city, state, zip, country,
     photo, secret_question, secret_answer, secondary_phone, secondary_phone_country, secondary_phone_type, middle_name, address_line2 } = req.body;

  const callProcedure = `CALL usp_account_login_create(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  // this procedure returns account_id which needs to store in the state
  
  db.query(callProcedure, [email, user_name, user_pwd, first_name, last_name, primary_phone, primary_phone_country, primary_phone_type, birth_date, gender, address_line1, 
    city, state, zip, country, photo, secret_question, secret_answer, secondary_phone, secondary_phone_country, secondary_phone_type, middle_name, address_line2], (err, result) => {
    if (err) {
      console.error('Error executing SQL:', err);
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(400).json({ message: 'Email/Username already exists. Cannot register with duplicate email/username.' });
      } else {
        res.status(500).json({ message: 'Internal server error',error:err });
      }
      return;
    }

    const response = result[0][0]; // Assuming stored procedure returns result in first index 

    res.status(200).json({ message: 'Account Created successfully. Please Login.', account_id: response.account_id  });
  });
});

module.exports = router;
