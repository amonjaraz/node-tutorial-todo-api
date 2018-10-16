var mongoose = require('mongoose');


///---------------------User
//Email property. - require and trim. also , type string, min length =1

var User = mongoose.model('User', 
{
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    },
});

module.exports = {
    User: User
}