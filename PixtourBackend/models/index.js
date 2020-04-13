const mongoose = require('mongoose');

require('dotenv').config();

const dbUrl = process.env.MONGODB_URI || `mongodb://localhost:27017/pixtoursOne`;


//this is where you tune mongoose:  
https://mongoosejs.com/docs/connections.html

mongoose.connect(dbUrl, {
        useNewUrlParser: true, 
        useFindAndModify: false, 
        useCreateIndex: true, 
        useUnifiedToplogy: true,
})
        .then(() => console.log('MongoDB is connected...'))
        .catch((err) => console.log(`MongoDB connection error": ${err}`));



module.exports = {
        Comment: require('./Comment'),
        Blog: require('./Blog'),
        User: require('./User')
};

