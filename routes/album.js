const express = require('express');
const router = express.Router();

const albumCtrl = require('../controllers/album');

router.get('/:id', isLoggedIn, albumCtrl.detail);
router.get('/:albumId/edit', isLoggedIn, albumCtrl.getEditPage);
router.put('/:albumId', isLoggedIn, albumCtrl.makeEdit);
router.delete('/:collectionId/:albumId', isLoggedIn, albumCtrl.removeAlbum);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}




module.exports = router;

