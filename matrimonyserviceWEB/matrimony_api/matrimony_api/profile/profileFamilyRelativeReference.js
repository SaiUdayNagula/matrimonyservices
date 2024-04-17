const express = require('express');
const db = require('../connection/database'); // Adjust the path as necessary
const router = express.Router();

router.post('/', (req, res) => {
  // Here you can use req.body to dynamically get user input
  const { profileid , reference_type, first_name,  last_name,  middle_name,  alias,  gender,  date_of_birth,  religion,  nationality,  caste,  marital_status,  highest_education,
      disability, address_line1,  city,  state,  country,  zip,  primary_phone,  secondary_phone,  can_communicate,  email,  linkedin,  instagram,  facebook,  whatsapp, 
      employment_status, emp_company_name,  emp_city,  emp_state,  emp_country,  emp_zip, account_id } = req.body;

  const callProcedure = `CALL usp_profile_family_refernce_create(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
  db.query(callProcedure, [ profileid , reference_type, first_name,  last_name,  middle_name,  alias,  gender,  date_of_birth,  religion,  nationality,  caste,  marital_status,
      highest_education, disability, address_line1,  city,  state,  country,  zip,  primary_phone,  secondary_phone,  can_communicate,  email,  linkedin,  instagram,  facebook,
        whatsapp, employment_status, emp_company_name,  emp_city,  emp_state,  emp_country,  emp_zip, account_id ], (err, result) => {
    if (err) {
      console.error('Error executing SQL:', err);
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(400).json({ message: 'Error Duplicate Entry.' });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
      return;
    }

    if (!result[0] || !result[0][0]) {
      res.status(200).json({ message: 'Details Added to Profile successfully.' });
    } else {
      const response = result[0][0];
      if (response['Profile doesnot exist'] === 'Profile doesnot exist') {
        res.status(200).json({ message: 'Profile doesnot exist.' });
      } else {
        res.status(200).json({ message: 'Details Added to Profile successfully.' });
      }
    }
    
  });
});

module.exports = router;
