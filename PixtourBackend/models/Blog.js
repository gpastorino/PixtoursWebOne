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
        author: {
                type: String,
        },
        content: {
                type: String, 
        }, 
        createdAt: {
                type: Date, 
                default: Date.now,
        }
}]

});

const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;














//for after auth needed:  

// authorID: {
//         type: mongoose.Schema.Types.ObjectId, 
//         ref: 'User'
// }, 