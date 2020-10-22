const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//var id = '55af9c0e19d9cca383979b0e6';


// if(!ObjectID.isValid(id)) {
//     console.log('Id not valid. Please try again...')
// }

/*
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos ', todos);
});


Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todos ', todo);
});
*/
/*
Todo.findById(id)
    .then((todo) => {
        if(!todo) {
            return console.log('ID not found in the database');
        }
    console.log('Todos ', todo);
}).catch((e) => console.log(e));
*/

// var id = '5af9a38b66b7dd2809fd1c4c';

// User.findById(id).then((user) => {
//     if(!user) {
//         return console.log('Unable to find user');
//     }

//     console.log(JSON.stringify(user, undefined, 2));

// }, (e) => {
//     console.log(e);
// })

//Todo Remove
/*
Todo.remove({}).then((results) => {
    console.log(results);
});
*/

//Todo findOneAndRemove

//Find By ID and Remove

Todo.findByIdAndRemove('5afa4e0c6b1bf179fdfa81e0').then((todo) => {
    console.log(todo);
});