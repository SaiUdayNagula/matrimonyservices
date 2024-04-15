const express = require('express');
const db = require('../connection/database'); // Adjust the path as necessary
const router = express.Router();

router.get('/', (req, res) => {

  // Using req.query to receive parameters from a GET request
  const { profileid } = req.query;

  const callView = `SELECT * FROM uvw_profile_personal WHERE profile_id = ?`;
  
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
            accountId: profile.account_id,
            firstName: profile.first_name,
            lastName: profile.last_name,
            middleName: profile.middle_name,
            prefix: profile.prefix,
            suffix: profile.suffix,
            gender: profile.gender,
            birthDate: profile.birth_date,
            phonemobile: profile.phone_mobile,
            phonehome: profile.phone_home,
            phone_emergency: profile.phone_emergency,
            emailid: profile.email_id,
            maritalstatus: profile.marital_status,
            religion: profile.religion,
            nationality: profile.nationality,
            caste: profile.caste,
            heightinches: profile.height_inches,
            heightcms: profile.height_cms,
            weight: profile.weight,
            weightunits: profile.weight_units,
            complexion: profile.complexion,
            linkedin: profile.linkedin,
            facebook: profile.facebook,
            instagram: profile.instagram,
            whatsappnumber: profile.whatsapp_number,
            profession: profile.profession,
            disability: profile.disability,
            created_date: profile.created_date,
            modified_date: profile.modified_date
            }));

        res.json(profiles);
    }
    
  });
});

module.exports = router;
