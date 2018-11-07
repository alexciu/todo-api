const mongoose = require('mongoose');

let uri = process.env.DATABASE_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(uri, {useNewUrlParser: true }).then(() =>
{
    console.log(`Conected to ${uri}`);
}, (err) =>{
        console.log(`Unable to connect ${uri}. ${err}`);
}).catch((e) => {

});
//console.log(mdburi())                                                         
module.exports = {mongoose};

//./../server