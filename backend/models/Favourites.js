const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = require('./User').schema;
const Book = require('./Books').schema;

const favouriteSchema = new Schema({
    //user: [User],
    //book: [Book]
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }
})

const Favorite = mongoose.model('Favorite', favouriteSchema);

module.exports = Favorite;