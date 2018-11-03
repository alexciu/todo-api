const mongoose = require('mongoose');




let User = mongoose.model('User', {
    username: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    name: {
        type: String,
        required: false,
        minlength: 3,
        trim: true
    },
    lastName: {
        type: String,
        required: false,
        minlength: 3,
        trim: true
    }
});

module.exports = {User};