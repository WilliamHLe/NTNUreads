let mongoose = require('mongoose');

/**
 * Connects to a mongoose database
 */
const connectDb = async () => {
    const uri= "mongodb+srv://user1:pass1@ntnureads.rjzef.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    if (typeof uri !== 'undefined') {
        mongoose.connect(uri, options);

        const db = mongoose.connection;

        db.once('open', () => console.log('Connected to database.'));
        db.on('error', console.error.bind(console, 'Database error:'));
    } else {
        console.log('Running without database.');
    }
};

module.exports.connectDb = connectDb;