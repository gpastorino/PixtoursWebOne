const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
author: {
        type: String,
}, 
content: {
        type: String, 
}, 
createdAt: {
        type: Date, 
        default: Date.now,
}, 

});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;