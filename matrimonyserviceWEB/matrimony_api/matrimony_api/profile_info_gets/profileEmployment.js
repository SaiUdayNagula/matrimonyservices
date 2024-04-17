const express = require('express');
const db = require('../connection/database'); // Adjust the path as necessary
const router = express.Router();

router.get('/', (req, res) => {

  // Using req.query to receive parameters from a GET request
  const { profileid } = req.query;

  const callView = `SELECT * FROM uvw_profile_employment WHERE profile_id = ?`;
  
  db.query(callView, [ profileid ], (err, results) => {
    if (err) {
      console.error('Error executing SQL:', err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
    
    if (results.length === 0) {
        // No profiles found
        res.status(404).json({ message: 'ProfileID doesnot exist' });
    } else {
        // Profiles found, return them
        const profiles = results.map(profile => ({            
            profileId: profile.profile_id,
            institutionname: profile.institution_name,
            addressline1: profile.address_line1,
            city: profile.city,
            state: profile.state,
            country: profile.country,
            zip: profile.zip,
            startyear: profile.start_year,
            endyear: profile.end_year,
            jobtitle: profile.job_title,
            lastsalarydrawn: profile.last_salary_drawn,
            datecreated: profile.date_created,
            datemodified: profile.date_modified
            }));

        res.json(profiles);
    }
    
  });
});

module.exports = router;
