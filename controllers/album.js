const Collection = require('../models/collection');
const Album = require('../models/album');


module.exports = {
    detail
};

function detail(req, res) {
        res.render('collection/detail');
    };
