const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    records: [albumSchema],
    amount: Number,
});


module.exports = mongoose.model('Collection', collectionSchema);