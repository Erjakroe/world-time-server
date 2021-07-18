const express = require("express");
const india = require("../services/asia/india");
const russia = require("../services/asia/russia");
const router = express.Router();

router.get('/kolkata',india.getKolkataData);
router.post('/kolkata',india.getKolkataData);

router.get('/russia',russia.getRussiaData);
router.post('/russia',russia.getRussiaData);

module.exports = router;