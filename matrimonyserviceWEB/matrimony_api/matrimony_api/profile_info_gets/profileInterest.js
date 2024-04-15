const express = require('express');
const db = require('../connection/database'); // Adjust the path as necessary
const router = express.Router();

router.get('/', (req, res) => {

  // Using req.query to receive parameters from a GET request
  const { profileid } = req.query;

  const callView = `SELECT * FROM uvw_profile_interest WHERE profile_id = ?`;
  
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
            interestid: profile.interest_id,
            description: profile.description,
            datecreated: profile.date_created,
            datemodified: profile.date_modified
            }));

        res.json(profiles);
    }
    
  });
});

module.exports = router;
