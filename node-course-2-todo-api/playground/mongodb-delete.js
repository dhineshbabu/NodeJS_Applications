//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to Mongo DB server');
    }
    console.log('Connected to MongDB server');

    //Delete Many
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //Delete One

    // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
    //         console.log(result);
    //     });

    //Find one and Delete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: "Dhinesh"});

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5af69a8bb4e47f35488959fe')
    }).then((results) =>{
        console.log(JSON.stringify(results, undefined,2));
    });
    
    //db.close();
});