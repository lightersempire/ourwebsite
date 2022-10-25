const mongoose = require ('mongoose');

// create the userschema
const userSchema = new mongoose.Schema({
    firstname: {
        type : String,
        required : true,
        min : 1,
        max : 255
    },
    lastname: {
        type : String,
        required : true,
        min : 1,
        max : 255
    },
    phone : {
        type : String,
    },
    country : {
        type: String
    },
       state : {
        type: String
    },
       comment : {
        type: String
    },

    email : {
        type : String,
        required : true,
        min : 6,
        max : 255,
       // unique :true,   this enforces uniqueness making sure no two users have the same email or username   
    },
    
    date : {
        type : Date,
        default : Date.now
    },
});

module.exports = new mongoose.model("member",userSchema);