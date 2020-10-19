const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Book = require('./Books').schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true
    },
    books: [{type:mongoose.Schema.ObjectID,ref: 'Books'}]
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;