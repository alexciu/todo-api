const mongoose = require('mongoose');

const {mdburi} = require('./../../temp/sec.js')

let uri = mdburi();

//mongoose.Promise = global.Promise;
mongoose.connect(uri, {useNewUrlParser: true }).then(() =>
{
    console.log(`Conected to mongodb://<dbuser>:<dbpassword>@ds243502.mlab.com:43502/todo-app`);
}, (err) =>{
    uri = 'mongodb://127.0.0.1:27017/TodoApp';
    mongoose.connect(uri, {useNewUrlParser: true })
    console.log(`Conected to ${uri}. \n Mlab error: ${err}`);
}

);
//console.log(mdburi())
module.exports = {mongoose};

//./../server