const express = require('express');
const router = express.Router()
const { getHomePage, getMrdungPage, postUserPage, getCreatePage } = require('../controlles/homeController')

router.get('/', getHomePage);

router.get('/mrdung', getMrdungPage)

router.get('/create', getCreatePage)

router.post('/add-user', postUserPage)
module.exports = router;