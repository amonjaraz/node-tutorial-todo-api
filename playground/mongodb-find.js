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
    //QUERY:
    // db.collection('Todos').find({_id: new ObjectID("5bb432350b109d264c7e421f")   //Driver in Mongo API notes has these functions
    //  }).toArray().then( (docs)=>{
    //COUNT:
    db.collection('Todos').find().count().then( (counts)=>{
        console.log('--Todos--', counts);
        //console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('unable to fetch todos', err)
    });

    //client.close();
});