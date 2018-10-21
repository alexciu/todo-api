//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err){
        return console.log("Unable to conect to database.");
    }
    console.log('Conected to Mongodb server.');
    const db = client.db('TodoApp');

    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));

        if (err) return console.log('Unable to fetch todos', err);
    })

    db.collection('Todos').find().count().then((count) => {
        console.log('Todos count:', count);

        if (err) return console.log('Unable to fetch todos', err);
    })

    client.close();
});