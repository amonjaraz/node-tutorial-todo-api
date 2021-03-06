var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

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
    });
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        //successs function
        res.send({
            todos
        });
    }, ()=>{
        //fail function
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req,res)=>{
    var id= req.params.id;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }

    Todo.findById(id).then((todo)=>{
        if (!todo){
            res.status(404).send();
        }
        res.status(200).send({todo});
    }).catch((e)=>{
        res.status(400).send();
    });
    
});

app.delete('/todos/:id', (req,res)=>{
    var id= req.params.id;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo)=>{
        if (!todo){
            res.status(404).send();
        }
        else {
            res.status(200).send({todo});
        }
        
    }).catch((e)=>{
        res.status(400).send();
     });
});

app.patch('/todos/:id', (req,res)=>{
    var id= req.params.id;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }

    var body= _.pick(req.body, ['text', 'completed']); // picks propties, if they exist, and adds them to body object.
    if (_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }
    else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo)=>{
        if(!todo){
            return res.statu(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
    })
})

app.listen(3000, ()=>{
    console.log(`Started on Port ${port}`);
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