const express = require('express');
const db = require('../connection/database'); // Adjust the path as necessary
const router = express.Router();

router.get('/', (req, res) => {

  // Using req.query to receive parameters from a GET request
  const { accountid } = req.query;

  const callView = `SELECT * FROM uvw_account_profiles WHERE account_id = ?`;
  
  db.query(callView, [accountid ], (err, results) => {
    if (err) {
      console.error('Error executing SQL:', err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    // const response = result[0][0]; // Assuming stored procedure returns result in first index 

    // TODO
    if (results.length === 0) {
        // No profiles found
        res.status(404).json({ message: 'No profiles found for this account' });
    } else {
        // Profiles found, return them
        const profiles = results.map(profile => ({
            accountId: profile.account_id,
            profileId: profile.profile_id,
            firstName: profile.first_name,
            lastName: profile.last_name,
            gender: profile.gender,
            birthDate: profile.birth_date,
            age: profile.Age,
            heightInches: profile.height_inches,
            caste: profile.caste,
            religion: profile.religion,
            city: profile.city,
            state: profile.state,
            country: profile.country
            }));

        res.json(profiles);
    }
    
  });
});

module.exports = router;
