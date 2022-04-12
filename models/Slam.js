const mongoose = require('mongoose');
const user = require('./user');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    comment: String,
    username: {
        type: String,
        ref: 'User',
    }
});
const slamSchema = new Schema ({
    username: {
        type: String,
        ref: 'User',
    },
    link: String,
    comments:[commentsSchema]
})

module.exports = mongoose.model('Slam', slamSchema);
