const express = require('express');
const db = require('../connection/database'); // Adjust the path as necessary
const router = express.Router();

router.get('/', (req, res) => {

  // Using req.query to receive parameters from a GET request
  const { profileid } = req.query;

  const callView = `SELECT * FROM uvw_profile_family_property WHERE profile_id = ?`;
  
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
            propertytype: profile.property_type,
            ownershiptype: profile.ownership_type,
            addressline1: profile.address_line1,
            city: profile.city,
            state: profile.state,
            country: profile.country,
            zip: profile.zip,
            landmark1: profile.landmark1,
            landmark2: profile.landmark2,
            datecreated: profile.date_created,
            modifieddate: profile.modified_date
            }));

        res.json(profiles);
    }
    
  });
});

module.exports = router;
