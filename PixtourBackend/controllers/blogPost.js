const db = require('../models');

//index posts -- query to filter by author, etc. 
const index = (request, response) => {
        db.Blog.find(request.query, (error, foundBlog) => {
                if (error) return response.status(500).json({
                        status: 500, 
                        message: error
                });
                response.status(200).json({
                        status: 200, 
                        data: foundBlog
                });
        });
};

// Show post:

const show = (request, response) => {
        db.Blog.findById(request.params.id, (error, foundBlog)=>{
                if(error) return response.status(500).json({
                        status: 500,
                });
                response.status(200).json({
                        status: 200, 
                        data: foundBlog
                });
        });
};

// Create Posts:

const create = (request, response) => {

        const newBlog = request.body;

        // newPost.authorId = request.session.currentUser.id;
        console.log(request.body)
        
        db.Blog.create(newBlog, (error, savedBlog) =>{
                if (error) return response.status(500).json({
                        status:500,
                        message:error
                });
                response.status(200).json({
                        status: 200, 
                        data: savedBlog
                });
        });
};

//update post:

const update = (request, response) => {
        db.Blog.findByIdAndUpdate(
                request.params.id, 
                request.body, 
                {new:true }, 
                
                (error, updatedBlog) => {
                if(error) return response.status(500).json({
                        status: 500, 
                        message: error
                });
                response.status(200).json({
                        status:200,
                        data: updatedBlog
                });
        });

};

//destroy a blog post:

const destroy = (request, response) => {
        db.Blog.findByIdAndDelete(request.params.id, (error, deletedBlog) => {
                if(error) {
                        return response
                        .status(500)
                        .json({
                        status: 500, 
                        message: "Something went terribly wrong!", error: error
                        });
                        
                }
                response.status(200).json({
                        status: 200, 
                        data: deletedBlog
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