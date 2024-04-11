const express = require('express');
const db = require('../connection/database'); // Adjust the path as necessary
const router = express.Router();

router.post('/', (req, res) => {
  // Here you can use req.body to dynamically get user input
  const { profileid , address_type , address_line1 , address_line2 , city , state , country , zip , phone , landmark1 , landmark2 , account_id } = req.body;

  const callProcedure = `CALL usp_profile_address_create2(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
  db.query(callProcedure, [profileid , address_type , address_line1 , address_line2 , city , state , country , zip , phone , landmark1 ,
                 landmark2 , account_id], (err, result) => {
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
        res.status(200).json({ message: 'Address Added to Profile successfully.' });
    } else {
        const response = result[0][0];
        if (response['Profile doesnot exist'] === 'Profile doesnot exist') {
          res.status(200).json({ message: 'Profile doesnot exist.' });
        } else {
          res.status(200).json({ message: 'Address Added to Profile successfully.' });
        }
    }

  });
});

module.exports = router;
