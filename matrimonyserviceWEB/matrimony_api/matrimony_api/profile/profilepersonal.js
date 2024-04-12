const express = require('express');
const db = require('../connection/database'); // Adjust the path as necessary
const router = express.Router();

router.post('/', (req, res) => {
  // Here you can use req.body to dynamically get user input
  const { accountid ,  first_name ,  last_name ,  middle_name ,  prefix ,  suffix ,  gender ,  birth_date ,  phone_mobile ,  phone_home ,  phone_emergency ,  email_id ,
      marital_status ,  religion , 	nationality ,  caste ,  height_inches ,  height_cms ,  weight ,  weight_units ,  complexion ,  linkedin , 
	facebook ,  instagram ,  whatsapp_number ,  profession ,  disability ,  created_user   } = req.body;

  const callProcedure = `CALL usp_profile_personal_create(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  // this procedure returns profile_id which needs to store in the state
  
  db.query(callProcedure, [accountid ,  first_name ,  last_name ,  middle_name ,  prefix ,  suffix ,  gender ,  birth_date ,  phone_mobile ,  phone_home ,  phone_emergency ,  
    email_id ,   marital_status ,  religion , 	nationality ,  caste ,  height_inches ,  height_cms ,  weight ,  weight_units ,  complexion ,  linkedin , 
    facebook ,  instagram ,  whatsapp_number ,  profession ,  disability ,  created_user], (err, result) => {
    if (err) {
      console.error('Error executing SQL:', err);
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(400).json({ message: 'Error Duplicate Entry.' });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
      return;
    }

    const response = result[0][0]; // Assuming stored procedure returns result in first index 

    if (response['Invalid Account ID'] === 'Invalid Account ID') {
      res.status(200).json({ message: 'Account_id doesnot exist.' });
    } else {
      res.status(200).json({ message: 'Profile Created successfully.', profile_id: response.last });
    }
    
  });
});

module.exports = router;
