// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log("connected to MongoDB Server");
    const db = client.db('TodoApp');

//deleteMany
    // db.collection('Todos').deleteMany({text:"eat lunch"}).then((result)=>{
    //     console.log(result);
    // });
//deleteOne
    // db.collection('Todos').deleteOne({text: "eat lunch"}).then((result)=>{
    //     console.log(result);
    // });
//FindOneAndDelete - returns the object deleted.
    db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        console.log(result);
    });

    //client.close();
});