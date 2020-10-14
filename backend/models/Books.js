const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookID: {
        type: Number,
        unique: true
    },
    title: {
        type: String
    },
    authors: {
        type: String
    },
    average_rating: {
        type: Number
    },
    isbn: {
        type: String
    },
    isbn13: {
        type: Number
    },
    language_code: {
        type: String
    },
    num_pages: {
        type: Number
    },
    ratings_count: {
        type: Number
    },
    text_reviews_count: {
        type: Number
    },
    publication_date: {
        type: Date
    },
    publisher: {
        type: String
    },
   /* reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }]*/
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;