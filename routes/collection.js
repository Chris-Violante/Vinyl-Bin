const express = require('express');
const router = express.Router();

const collectionCtrl = require('../controllers/collection');


router.get('/', isLoggedIn, collectionCtrl.userCollection);
router.post('/', isLoggedIn, collectionCtrl.newAlbum);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}


module.exports = router;