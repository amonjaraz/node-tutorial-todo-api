// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log("connected to MongoDB Server");
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5bb585e319b670551c858d73')},
     {
        $set: {  //sets the value of a field in a document. //https://docs.mongodb.com/manual/reference/operator/update/
         completed: true //property that we want updated
        }
    }, {
        returnOriginal: false //returns updated object
    }).then((result)=>{
        console.log(result)
    });


    //client.close();
});