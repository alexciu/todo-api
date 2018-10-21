//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err){
        return console.log("Unable to conect to database.");
    }
    console.log('Conected to Mongodb server.');
    const db = client.db('TodoApp');

    db.collection('Users').insertOne({
        name: 'Alex',
        age: 32,
        location: 'Brasov',        
    }, (err, result) => {
        if (err) return console.log('Unable to insertOne:', err);

        console.log(JSON.stringify(result.ops, undefined, 2));

    })

    client.close();
});