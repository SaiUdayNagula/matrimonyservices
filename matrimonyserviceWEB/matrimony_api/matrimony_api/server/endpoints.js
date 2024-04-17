const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from Express!');
});

router.get('/api/data', (req, res) => {
  res.json({ message: 'Data from Express API' });
});

router.use(bodyParser.json());

// Import the specific route modules
const loginRoute = require('../login/login');
const registerRoute = require('../register/register');
const otpRoute = require('../otp_validation/validate_otp')
const profilepersonalcreateRoute = require('../profile/profilePersonal')
const profileaddressRoute = require('../profile/profileAddress')
const profile_eduRoute = require('../profile/profileEducation')
const profilepropRoute = require('../profile/profileProperty')
const profileInterestRoute = require('../profile/profileInterest')
const profileHobbyRoute = require('../profile/profileHobby')
const profileEmploymentRoute = require('../profile/profileEmployment')
const profileFamilyRelativeDetailsRoute = require('../profile/profileFamilyRelativeReference')

// gets
const accountProfilesRoute = require('../dashboard_gets/accountProfiles')
const profilePersonalGetRoute = require('../profile_info_gets/profilePersonal')
const profileAddressGetRoute = require('../profile_info_gets/profileAddress')
const profileEducationGetRoute = require('../profile_info_gets/profileEducation')
const profilePropertyGetRoute = require('../profile_info_gets/profileProperty')
const profileInterestGetRoute = require('../profile_info_gets/profileInterest')
const profileHobbyGetRoute = require('../profile_info_gets/profileHobby')
const profileEmploymentGetRoute = require('../profile_info_gets/profileEmployment')
const profileFamilyRelativeReferenceGetRoute = require('../profile_info_gets/profileFamilyRelativeReference')

// Map the route modules to their paths for set methods
router.use('/api/login', loginRoute);
router.use('/api/register', registerRoute);
router.use('/api/otp', otpRoute);
router.use('/api/propersonal', profilepersonalcreateRoute);
router.use('/api/proaddress', profileaddressRoute);
router.use('/api/proeducation', profile_eduRoute);
router.use('/api/proproperty', profilepropRoute);
router.use('/api/prointerest', profileInterestRoute);
router.use('/api/prohobby', profileHobbyRoute);
router.use('/api/proemployment', profileEmploymentRoute);
router.use('/api/profamilyrelativedetails', profileFamilyRelativeDetailsRoute);

//gets
router.use('/api/accountpro', accountProfilesRoute);
router.use('/api/propersonalget', profilePersonalGetRoute);
router.use('/api/proaddressget', profileAddressGetRoute);
router.use('/api/proeducationget', profileEducationGetRoute);
router.use('/api/propropertyget', profilePropertyGetRoute);
router.use('/api/prointerestget', profileInterestGetRoute);
router.use('/api/prohobbyget', profileHobbyGetRoute);
router.use('/api/proemploymentget', profileEmploymentGetRoute);
router.use('/api/profamilyrelativereferenceget', profileFamilyRelativeReferenceGetRoute);

module.exports = router;