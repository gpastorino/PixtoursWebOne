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
user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
}]

});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;