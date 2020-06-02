const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    records: [{
        type: Schema.Types.ObjectId,
        ref: "Album"
    }],
    amount: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});


module.exports = mongoose.model('Collection', collectionSchema);