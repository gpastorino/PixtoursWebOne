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
