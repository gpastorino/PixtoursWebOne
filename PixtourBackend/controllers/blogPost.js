const db = require('../models');

//index posts -- query to filter by author, etc. 
const index = (request, response) => {
        db.Post.find(request.query, (error, foundPosts) => {
                if (error) return response.status(500).json({
                        status: 500, 
                        message: error
                });
                response.status(200).json({
                        status: 200, 
                        data: foundPosts
                });
        });
};

// Show post:

const show = (request, response) => {
        db.Post.findById(request.params.id, (error, foundPost)=>{
                if(error) return response.status(500).json({
                        status: 500,
                });
                response.status(200).json({
                        status: 200, 
                        data: foundPost
                });
        });
};

// Create Posts:

const create = (request, response) => {
        const newPost =request.body;
        // newPost.authorId = request.session.currentUser.id;
        console.log(request.body)
        db.Post.create(newPost, (error, savedPost) =>{
                if (error) return response.status(500).json({
                        status:500,
                        message:error
                });
                response.status(200).json({
                        status: 200, 
                        data: savedPost
                });
        });
};

//update post:

const update = (request, response) => {
        db.Post.findByIdAndUpdate(request.params.id, request.body, {new:true }, (error, updatedPost) => {
                if(error) return response.status(500).json({
                        status: 500, 
                        message: error
                });
                response.status(200).json({
                        status:200,
                        data: updatedPost
                });
        });

};

//destroy a blog post:

const destroy = (response, request) => {
        db.Post.findByIdAndDelete(request.params.id, (error, deletedPost) => {
                if(error) return response.status(500).json({
                        status: 500, 
                        message: error
                });
                response.status(200).json({
                        status: 200, 
                        data: deletedPost
                });
        });
};

module.exports = {
        index, 
        show, 
        create, 
        update, 
        destroy
}