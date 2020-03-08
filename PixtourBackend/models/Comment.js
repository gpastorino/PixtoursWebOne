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
// image: {
//         type: String,
//         default: '',
// }
});

const Comment = mongoose.model('Comment', CommentSchema);