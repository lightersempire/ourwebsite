const express = require ('express');
const router = express.Router();
const Member = require('../models/members');
const {register} = require ('../controllers/members')
// const path = require ('path')

//@description: serves the static files of the webpage
// @ route: GET '/'
router.get('/',(req,res)=>{
    // res.send(("../public/index"))
        res.send(path.join(__dirname,"../../public/"))
})

//@description : to register new members
// @ route :POST '/'
router.post('/',register);



module.exports= router