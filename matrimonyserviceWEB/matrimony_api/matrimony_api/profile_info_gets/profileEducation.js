const express = require('express');
const db = require('../connection/database'); // Adjust the path as necessary
const router = express.Router();

router.get('/', (req, res) => {

  // Using req.query to receive parameters from a GET request
  const { profileid } = req.query;

  const callView = `SELECT * FROM uvw_profile_education WHERE profile_id = ?`;
  
  db.query(callView, [ profileid ], (err, results) => {
    if (err) {
      console.error('Error executing SQL:', err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    // const response = result[0][0]; // Assuming stored procedure returns result in first index 

    // TODO
    if (results.length === 0) {
        // No profiles found
        res.status(404).json({ message: 'ProfileID doesnot exist' });
    } else {
        // Profiles found, return them
        const profiles = results.map(profile => ({            
            profileId: profile.profile_id,
            educationlevel: profile.education_level,
            yearcompleted: profile.year_completed,
            institutionname: profile.institution_name,
            addressline1: profile.address_line1,
            city: profile.city,
            state: profile.state,
            country: profile.country,
            zip: profile.zip,
            fieldofstudy: profile.field_of_study,
            datecreated: profile.date_created,
            modifieddate: profile.modified_date
            }));

        res.json(profiles);
    }
    
  });
});

module.exports = router;
