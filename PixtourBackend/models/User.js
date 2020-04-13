const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
        email: {
                type: String, 
                required: [true, "Your email address is required for signup."]
        },
        password: {
                type: String, 
                required:  [true, "A password is required for signup."]
        },
        comment: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
        },
        createdAt: {
                type: Date, 
                default: Date.now }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;

//how to get the models to interact with each other? 

