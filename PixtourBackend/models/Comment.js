const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
// author: {
//         type: String,
// }, 
// authorID: {
//         type: mongoose.Schema.Types.ObjectId, 
//         ref: 'User'
// }, 
content: {
        type: String, 
}, 
createdAt: {
        type: Date, 
        default: Date.now,
}, 

});

const Comment = mongoose.model('Comment', CommentSchema);