const db = require('../models');


//show post
const show = (request, response) => {
        db.Comment.findById(request.params.id, (error, foundComment) => {
                if(error) return response.status(500).json({
                        status: 500,
                        message: error
                });
                response.status(200).json({
                        status:200,
                        data: foundComment
                });
        });
};

//Create posts

const create = (request, response) => {

        const newComment = request.body;

        // newPost.authorId = request.session.currentUser.id;
        console.log(request.body)
        console.log(newComment)
        
        db.Comment.create(newComment, (error, savedComment) => {
                if(error) return response.status(500).json({
                        status: 500,
                        message: error
                });
                response.status(200).json({
                        status: 200,
                        data: savedComment
                });
        });
};

//update/edit posts:
const update = (request, response) => {
        db.Comment.findByIdAndUpdate(request.params.id, request.body, { new: true}, (error, updatedComment) => {
                if(error) return response.status(500).json({
                        status: 500,
                        message: error
                });
                response.status(200).json({
                        status: 200, 
                        data: updatedComment
                });
        });
};

// Destroy Comment:
const destroy = (request, response) => {
        db.Comment.findByIdAndDelete(request.params.id, (error, deletedComment) => {
                if(error) return response.status(500).json({
                        status: 500,
                        message: error
                });
                response.status(200).json({
                        status:200,
                        data: deletedComment
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