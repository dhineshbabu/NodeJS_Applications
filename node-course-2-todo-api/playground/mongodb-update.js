//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to Mongo DB server');
    }
    console.log('Connected to MongDB server');

//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('5af6a1106b1bf179fdfa6b84')
//    }, {
//        $set: {
//            completed: false
//        }
//    },{
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    });
    


   db.collection('Users').findOneAndUpdate({
       _id: new ObjectID('5af6984770bbb81d0c04f4c2')
   }, {
       $set: {
           name: 'Kanu Hasini '
       },
       $inc: {
           age: 1
       }
   },{
       returnOriginal: false
   }).then((result) => {
       console.log(result);
   });

    //db.close();
});