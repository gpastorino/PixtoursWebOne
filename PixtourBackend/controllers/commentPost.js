const db = require('../models');


//show post
const show = (request, response) => {
        db.Post.findById(request.params.id, (error, foundPost) => {
                if(error) return response.status(500).json({
                        status: 500,
                        message: error
                });
                response.status(200).json({
                        status:200,
                        data: foundPost
                });
        });
};

//Create posts

const create = (request, response) => {

        const newPost = request.body;
        // newPost.authorId = request.session.currentUser.id;
        console.log(request.body)
        console.log(newPost)
        db.Post.create(newPost, (error, savedPost) => {
                if(error) return response.status(500).json({
                        status: 500,
                        message: error
                });
                response.status(200).json({
                        status: 200,
                        data: savedPost
                });
        });
};

//update/edit posts:
const update = (request, response) => {
        db.Post.findByIdAndUpdate(request.params.id, request.body, { new: true}, (errror, updatedPost) => {
                if(error) return response.status(500).json({
                        status: 500,
                        message: error
                });
                response.status(200).json({
                        status: 200, 
                        data: updatePost
                });
        });
};

//Destrop Comment:
const destroy = (request, response) => {
        db.Post.findByIdAndUpdate(request.params.id, (error, deletedPost) => {
                if(error) return response.status(500).json({
                        status: 500,
                        message: error
                });
        });
};

module.exports = {
        // index,
        show,
        create,
        update,
        destroy
      }