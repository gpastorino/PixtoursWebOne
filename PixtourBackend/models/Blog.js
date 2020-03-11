const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
title: {
        type: String, 
}, 
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
comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
}]

});

const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;














//for after auth needed:  

// authorID: {
//         type: mongoose.Schema.Types.ObjectId, 
//         ref: 'User'
// }, 





//this is a method without using the referenced Schema:  

// author: {
//         type: String,
// },
// content: {
//         type: String, 
// }, 
// createdAt: {
//         type: Date, 
//         default: Date.now,
// }