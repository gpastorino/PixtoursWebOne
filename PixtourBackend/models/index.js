const mongoose = require('mongoose');

require('dotenv').config();

const dbUrl = process.env.MONGO_URI;

mongoose.connect(dbUrl, {
        useNewUrlParser: true, 
        useFindAndModify: false, 
        useCreateIndex: true, 
        useUnifiedToplogy: true,
})
        .then(() => console.log('MongoDB is connected...'))
        .catch((err) => console.log(`MongoDB connection error": ${err}`));
mongoose.connect( process.env.MONGODB_URI || 4000 );

module.exports = {
        Comment: require('./Comment'),
        Blog: require('./Blog'),
};

