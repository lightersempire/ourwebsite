const mongoose = require ('mongoose');

// create the userschema
const userSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true,
    },
    content: {
        type : String,
        required : true,
    },
    photo : {
        type : String,
    },    
    createdAt : {
        type : Date,
        default :Date.now(),
    },
});

module.exports = new mongoose.model("blog",userSchema);

  