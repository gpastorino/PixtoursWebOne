const db = require('../models');



//The Original:  

//show post
// const show = (request, response) => {
//         db.Comment.findById(request.params.id, (error, foundComment) => {
//                 if(error) return response.status(500).json({
//                         status: 500,
//                         message: error
//                 });
//                 response.status(200).json({
//                         status:200,
//                         data: foundComment
//                 });
//         });
// };


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

const create = (request, response) => {
        const newComment = request.body;
        db.Comment.create(newComment, (error, createdComment) => {
                        if(error) {
                                return response.error(500, 'Something went wrong. Please try again.');
                        }
                        response.success(200, createdComment);
                });
        };

        // const create = (request, response) => {
        //         db.Trainer.create(request.body, (error, createdTrainer) => {
        //           if (error) {
        //             return response.error(500, 'Something went wrong. Please try again.');
        //           }
        //           response.success(200, createdTrainer);
        //         });
        //       };







//         db.Comment.create(newComment, (error, savedComment)=> {
                
//         .populate('comments')
//         .exec((error, foundComment)) => {
//         db.Comment.create(newComment, (error, savedComment) => {
//                 if(error) return response.status(500).json({
//                         status: 500,
//                         message: error
//                 });
//                 response.success(200).json({
//                         status: 200,
//                         data: savedComment
//                 });
//         }
// }

// https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/

// https://stackoverflow.com/questions/18001478/referencing-another-schema-in-mongoose

//https://dev.to/mkilmer/how-create-relationships-with-mongoose-and-node-js-with-real-example-43ei

//https://dev.to/aurelkurtula/building-a-restful-api-with-express-and-mongodb--3mmh

//https://blog.hellojs.org/creating-relationships-between-schemas-in-a-document-based-database-like-mongodb-1f965aecc035

//https://bezkoder.com/mongoose-one-to-many-relationship/





//Create posts

// const create = (request, response) => {

//         const newComment = request.body;

//         // newPost.authorId = request.session.currentUser.id;
//         console.log(request.body)
//         console.log(newComment)

//         db.Comment.create(newComment, (error, savedComment) => {
//                 if(error) return response.status(500).json({
//                         status: 500,
//                         message: error
//                 });
//                 response.status(200).json({
//                         status: 200,
//                         data: savedComment
//                 });
//         });
// };

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









// const index = (request, response) => {
//         db.Trainer.find({})
//           .populate('caughtPokemon')
//           .exec((error, allTrainers) => {
//             if (error) {
//               return response.error(500, 'Something went wrong. Please try again.');
//             }
//             response.success(200, allTrainers);
//           });
//       };