const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5bc543758becc7e82b8a3c0e";

if (!ObjectID.isValid(id)) {
    console.log('ID is not valid');
}


Todo.find({
    _id: id
}).then((todos)=>{
    console.log('Todos ', todos);
});

//returns one , first of many if found. Prefered method if looking for one record.
Todo.findOne({
    _id: id
}).then((todo)=>{
    console.log('Todo ', todo);
});

Todo.findById(id).then((todo)=>{
    if (!todo){
        return console.log('ID not Found');
    }
    console.log('Todo by ID ', todo);
}).catch((e)=>{
    console.log(e); //invalid id was used.
});

User.findById(id).then((user)=>{
    if (!user){
        return console.log('ID not Found');
    }
    console.log('User by ID ', JSON.stringify(user, undefined,2));
}).catch((e)=>{
    console.log(e); //invalid id was used.
});