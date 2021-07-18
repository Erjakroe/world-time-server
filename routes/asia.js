const express = require("express");
const india = require("../services/asia/india");
const router = express.Router();

router.get('/kolkata',india.getKolkataData);
router.post('/kolkata',india.getKolkataData);


module.exports = router;