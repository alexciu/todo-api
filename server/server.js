var express = require('express');
var bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
    //console.log(req.body)
});


app.get('/todos', (req, res) => {
    Todo.find().then((todos) =>{
        res.send({todos})
    }, (err) => {
        res.status(400).send(err);
    })
});







app.listen(port, () => {
    console.log(`Server start on port ${port}.`);
});

module.exports = {app};


// let newTodo = new Todo({
//     text: 'Cumpara paine',
//     completed: true,
//     completedAt: 6
// });

// newTodo.save().then((doc) => {
//     console.log('New todo added', doc);
// }, (er) => {
//     console.log('Unable to add todo', er);
// });



// let newUser = new User({
//     username: 'pestePrajit',
//     email: 'abc@xyz.com',
//     password: 'password123',
//     name: 'Alex',
//     lastName: 'Ciu'
// });

// newUser.save().then((doc) => {
//     console.log('New user created:', JSON.stringify(doc, undefined, 2));
// }, (er) => {
//     console.log('Unable to add todo', er);
// });