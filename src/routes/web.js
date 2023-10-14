const express = require('express');
const router = express.Router();
const {
    getHomePage,
    postCreateUser,
    postUpdateUser,
    getUpdatePage,
    getCreatePage,
} = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);

router.get('/update/:id', getUpdatePage);

module.exports = router;
