const db = require('../models');


const index = (request, response) => {
        db.Comment.find(request.query, (error, foundComment) => {
                if (error) return response.status(500).json({
                        status: 500, 
                        message: error
                });
                response.status(200).json({
                        status: 200, 
                        data: foundComment
                });
        });
};


//This is what will be used to associate the comments to the blog post:  

const show = (request, response) => {
        db.Comment.findById(request.params.id)
          .populate('comments')
          .exec((error, foundComment) => {
            if (error) {
              return response.error(500, 'Something went wrong. Please try again.');
            }
            response.success(200, foundComment);
          });
      };


//does this need to be modified so that the comment is added under the blog?  


const create = (request, response) => {
        const newComment = request.body;

        // how would i add this to the blog part? 


        db.Blog.findById(request.params.id, (error, foundBlog) => {
                if(error) {
                        return response.error(500, 'Something went wrong. Please try again.');
                }
                db.Comment.create(newComment, (error, createdComment) => {
                        if(error) {
                                return response.error(500, 'Something went wrong. Please try again.');
                        }
                        foundBlog.comments.push(createdComment._id);
                        foundBlog.save();
                        response.success(200, createdComment);
                });
        })
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
        index,
        show,
        create,
        update,
        destroy
      }



//resources: 
// https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/

// https://stackoverflow.com/questions/18001478/referencing-another-schema-in-mongoose

//https://dev.to/mkilmer/how-create-relationships-with-mongoose-and-node-js-with-real-example-43ei

//https://dev.to/aurelkurtula/building-a-restful-api-with-express-and-mongodb--3mmh

//https://blog.hellojs.org/creating-relationships-between-schemas-in-a-document-based-database-like-mongodb-1f965aecc035

//https://bezkoder.com/mongoose-one-to-many-relationship/

