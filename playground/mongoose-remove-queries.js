const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5bc543758becc7e82b8a3c0e";

if (!ObjectID.isValid(id)) {
    console.log('ID is not valid');
}

//Todo.remove({}) - remove all items in collection.
// Todo.remove({}).then((res)=>{
//     console.log(res);
// });

//Todo.findOneAndRemove() //Returns doc and will delete
//Todo.findByIdAndRemove() //Returns doc and will delete

Todo.findByIdAndRemove('5bc9c2eb34304e4fecd469ef').then((todo)=>{
    console.log(todo);
})