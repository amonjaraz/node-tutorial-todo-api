// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'alex', age: 26}; //object descruturing, get properties from an object ES5
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log("connected to MongoDB Server");
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result)=>{
    //     if (err){
    //         console.log('unable to insert todo',err);
    //     }
    //     else {
    //         console.log(JSON.stringify(result.ops, undefined,2));
    //     }
    // })

    //     db.collection('Users').insertOne({
    //     name: 'alex2',
    //     age: 19,
    //     location: 'Houston'
    // }, (err, result)=>{
    //     if (err){
    //         console.log('unable to insert user',err);
    //     }
    //     else {
    //         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined,2));
    //     }
    // })

    client.close();
});