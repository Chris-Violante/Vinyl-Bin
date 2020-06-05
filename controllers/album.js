const Collection = require('../models/collection');
const Album = require('../models/album');


module.exports = {
    detail, 
    removeAlbum,
    getEditPage,
    makeEdit
};

function makeEdit(req, res) {
    Album.findByIdAndUpdate(req.params.albumId, req.body, {new: true}, function(err, album) {
        console.log(album, 'hit the make edit controller')
        res.redirect(`/albums/${album._id}`);
    });
};

function getEditPage(req, res) {
    Album.findById(req.params.albumId, function(err, album){
        res.render('album/edit', {album : album});
    });
};

function detail(req, res) {
    Album.findById(req.params.id, function(err, album) {
        res.render('album/detail', {album});
        });
    };

    function removeAlbum(req, res) {
        Collection.findOne({records: req.params.albumId}, function(err, collection) {
            collection.records.remove(req.params.albumId);
            collection.save(function(err) {
                res.redirect('/collection')
            });
        }
    )};

