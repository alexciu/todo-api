const mongoose = require('mongoose');
const validator = require('validator'); 
const jwt = require('jsonwebtoken');
const _ = require('lodash');

let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false,
        minlength: 3,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        trim: true,
        unique: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message:'{VALUE} is not valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true
        }
    }],
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
})

UserSchema.methods.toJSON = function (){
    let user = this;
    let userObject = user.toObject();

    return  _.pick(userObject, ['_id', 'email'])
};

UserSchema.methods.generateAuthToken = function () {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens = user.tokens.concat([{access, token}]);
    return user.save().then(() => {
        return token;
    });
};

let User = mongoose.model('User', UserSchema);

module.exports = {User};