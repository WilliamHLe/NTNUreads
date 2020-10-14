const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: String,
    rating: Number,
    review: String,
    book: {
        type: Schema.Types.ObjectId,
        ref: "Book"
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Review', reviewSchema);