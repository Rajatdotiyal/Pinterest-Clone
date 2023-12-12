
const mongoose = require('mongoose');
const users = require('./users');
const postSchema = new mongoose.Schema({
    postText: {
        type: String,
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    likes: {
        type: Array,
        default: [],
    },
});

module.exports = mongoose.model('Post', postSchema);