const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
title: {
        type: String, 
}, 
author: {
        type: String,
}, 
authorID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
}, 
content: {
        type: String, 
}, 
createdAt: {
        type: Date, 
        default: Date.now,
}, 

});

const Blog = mongoose.model('Blog', BlogSchema);