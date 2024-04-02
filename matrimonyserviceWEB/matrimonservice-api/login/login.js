const express = require('express');
const db = require('../connection/database'); // Adjust the path as necessary
const router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;
  
  // needs to be corrected
  // this returns 5-digit email_otp if success 
  // else returns -1 if validation fails
  // 5-digit otp need to sent to email
  // this api should return success/failure message
  const sql = `CALL usp_validate_login(?, ?, 'dummy_ip', 'dummy_sysname', 'dummy_usragent', 'dummy_location')`; // Adjust parameters as needed
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Error executing SQL:', err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    const response = result[0][0]; // Assuming stored procedure returns result in first index 

    if (response.otp !== undefined && response.otp !== -1) {
      // OTP is valid and generated, send it to frontend
      res.json({ message: 'Login successful', otp: response.otp });
    } else {
      // OTP not generated or validation failed
      res.status(401).json({ message: 'Invalid credentials. Incorrect Username or Password' });
    }
  });
});

module.exports = router;