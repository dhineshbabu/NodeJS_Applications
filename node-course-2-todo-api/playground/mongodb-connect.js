//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user  = {name:'dhinesh', age: 25};
// var {name} = user;
// console.log('name ', name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to Mongo DB server');
    }
    console.log('Connected to MongDB server');

    // db.collection('Todos').insertOne({
    //     textProperty: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo ', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Kanu',
    //     age: 2,
    //     location: 'erode'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert into Users collection', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined,2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});