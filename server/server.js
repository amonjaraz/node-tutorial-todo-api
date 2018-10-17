var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json()); //middleware, allows you to get body text to json?

app.post('/todos',(req, res)=>{
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text,
    });

    todo.save().then((doc)=>{
        res.status(200).send(doc);
    }, (e)=>{
        res.status(400).send(e);
    })
});

app.listen(3000, ()=>{
    console.log('Started on Port 3000');
})

module.exports = {app};
//--------------------------------------------------------------------

// // //new object
// // var newTodo = new Todo({text: 'finish node js'});

// // //save object to collection
// // newTodo.save().then((doc)=>{
// //     console.log('saved todo', doc);
// // }, (e)=>{
// //     console.log('unable to save todo');
// // });

// // //new object
// // var newTodo2 = new Todo({text: 'feed nanta', completed: true, completedAt: 123});

// // //save object to collection
// // newTodo2.save().then((doc)=>{
// //     console.log('saved todo', doc);
// // }, (e)=>{
// //     console.log('unable to save todo');
// // });


// // //new object
// var newUser = new User({email: 'Alex_Monjaraz@test.com    '});

// //save object to collection
// newUser.save().then((doc)=>{
//     console.log('saved user', doc);
// }, (e)=>{
//     console.log('unable to save user');
// });