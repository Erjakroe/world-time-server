const express = require("express");
const france = require("../services/Europe/france");
const germany = require("../services/Europe/germany");
const london = require("../services/Europe/london");
const router = express.Router();

router.get('/germany',germany.getGermanyData);
router.post('/germany',germany.getGermanyData);


router.get('/france',france.getFranceData);
router.post('/france',france.getFranceData);

router.get('/london',london.getLondonData);
router.post('/london',london.getLondonData);

module.exports = router;