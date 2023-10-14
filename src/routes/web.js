const express = require('express');
const router = express.Router();
const { getHomePage, postCreateUser, getCreatePage, getUpdatePage } = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);

router.get('/update', getUpdatePage);

module.exports = router;
