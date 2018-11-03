const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

var id = '5bccbc9792a80215c0150fb5';

if (!ObjectID.isValid(id)){
    console.log('ID is not valid.')
};

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo){
        return console.log("Id not found.");
    }
    console.log('todo by id', todo);
}).catch((err) => {console.log(err)});


User.findById(id).then((user) => {
    if (!user){
        return console.log("User by Id not found.");
    }
    console.log('User by id', user);
}).catch((err) => {console.log(err)});