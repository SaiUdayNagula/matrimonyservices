const express = require('express');
const db = require('../connection/database'); // Adjust the path as necessary
const router = express.Router();

router.get('/', (req, res) => {

  // Using req.query to receive parameters from a GET request
  const { profileid, referencetype } = req.query;

  const callView = `SELECT * FROM uvw_profile_family_reference WHERE profile_id = ? and reference_type = ?`;
  
  db.query(callView, [ profileid, referencetype ], (err, results) => {
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
            reference_type: profile.reference_type,
            first_name: profile.first_name,
            last_name: profile.last_name,
            middle_name: profile.middle_name,
            alias: profile.alias,
            gender: profile.gender,
            date_of_birth: profile.date_of_birth,
            religion: profile.religion,
            nationality: profile.nationality,
            caste: profile.caste,
            marital_status: profile.marital_status,
            highest_education: profile.highest_education,
            disability: profile.disability,
            address_line1: profile.address_line1,
            city: profile.city,
            state: profile.state,
            country: profile.country,
            zip: profile.zip,
            primary_phone: profile.primary_phone,
            secondary_phone: profile.secondary_phone,
            can_communicate: profile.can_communicate,
            email: profile.email,
            linkedin: profile.linkedin,
            instagram: profile.instagram,
            facebook: profile.facebook,
            whatsapp: profile.whatsapp,
            employment_status: profile.employment_status,
            emp_company_name: profile.emp_company_name,
            emp_city: profile.emp_city,
            emp_state: profile.emp_state,
            emp_country: profile.emp_country,
            emp_zip: profile.emp_zip,
            date_created: profile.date_created,
            datemodified: profile.date_modified
            }));

        res.json(profiles);
    }
    
  });
});

module.exports = router;
