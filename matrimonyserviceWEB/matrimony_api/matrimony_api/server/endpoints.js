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
const profilepersonalcreateRoute = require('../profile/profilepersonal')
const profileaddressRoute = require('../profile/profileAddress')
const profile_eduRoute = require('../profile/profileEducation')
const profilepropRoute = require('../profile/profileProperty')
const profileInterestRoute = require('../profile/profileInterest')
const profileHobbyRoute = require('../profile/profileHobby')

// Map the route modules to their paths
router.use('/api/login', loginRoute);
router.use('/api/register', registerRoute);
router.use('/api/otp', otpRoute);
router.use('/api/propersonal', profilepersonalcreateRoute);
router.use('/api/proaddress', profileaddressRoute);
router.use('/api/proeducation', profile_eduRoute);
router.use('/api/proproperty', profilepropRoute);
router.use('/api/prointerest', profileInterestRoute);
router.use('/api/prohobby', profileHobbyRoute);

module.exports = router;