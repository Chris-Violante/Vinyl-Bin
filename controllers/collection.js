const Collection = require('../models/collection');
const Album = require('../models/album');


module.exports = {
   userCollection,
    isLoggedIn,
    newAlbum
};

function newAlbum(req, res) {
    console.log(req.user);
    Collection.findOne({user: req.user}, function(err, collection){
        console.log(collection);
        const album = new Album(req.body);
        album.save(function(err) {
            if (err) return res.redirect('/collection');
            console.log(album);
            collection.records.push(album);
            collection.save();
            res.redirect('/collection');
            
        });
});
};

function userCollection(req, res) {
    Collection.findOne({user: req.user}).populate('records').exec(function(err, collection) {
        if (collection) {
            console.log(collection, 'Hit the IF side of function')
            res.render('collection/collection', {collection});

        }else {
            Collection.create({user: req.user}, function(err, collection) {
                console.log(collection, 'CREATED else side of fn')
                res.render('collection/collection', {collection});
            })
        }
    });
};

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  };