const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    comment: String,
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    commentUserAvatar: {
        type: String,
        ref: 'User',
    },
    username: {
        type: String,
        ref: 'User',
    },
});

const slamSchema = new Schema ({
    userAvatar: {
        type: String,
        ref: 'User',
    },
    userName: {
        type: String,
        ref: 'User',
    },
    link: String,
    comments:[commentsSchema],
})

module.exports = mongoose.model('Slam', slamSchema);
