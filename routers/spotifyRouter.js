const express = require('express');
const {initiateAuthorization, handleCallback} = require('../controllers/spotifyController');


const router = express.Router();
router.get('/connect', initiateAuthorization);
router.get('/callback', handleCallback);

module.exports = router;