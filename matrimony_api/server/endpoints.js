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

// Map the route modules to their paths
router.use('/api/login', loginRoute);
router.use('/api/register', registerRoute);
router.use('/api/otp', otpRoute);

module.exports = router;