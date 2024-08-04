const express = require('express');
const router = express.Router()
const { getHomePage, getMrdungPage } = require('../controlles/homeController')

router.get('/', getHomePage);

router.get('/mrdung', getMrdungPage)
module.exports = router;