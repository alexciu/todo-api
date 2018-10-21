const mongoose = require('mongoose');




let User = mongoose.model('User', {
    username: {
        type: String,
        require: true,
        minlength: 3,
        trim: true
    },
    email: {
        type: String,
        require: true,
        minlength: 5,
        trim: true
    },
    password: {
        type: String,
        require: true,
        minlength: 5,
        trim: true
    },
    name: {
        type: String,
        require: false,
        minlength: 3,
        trim: true
    },
    lastName: {
        type: String,
        require: false,
        minlength: 3,
        trim: true
    }
});

module.exports = {User};