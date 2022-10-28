const express = require ('express');
const router = express.Router();
const Member = require('../models/members');
const {register} = require ('../controllers/members')
// const path = require ('path')

const {
    getAllStories,
    getAstory,
} = require ('../services/blog')

//@description: serves the static files of the webpage
// @ route: GET '/'
router.get('/',(req,res)=>{
    // res.send(("../public/index"))
        res.send(path.join(__dirname,"../../public/"))
})

//@description : to register new members
// @ route :POST '/'
router.post('/',register);

//@description : to render the blog page
// @ route :get '/blog'
router.get('/blog', async(req, res)=>{
    try {
        const stories= await getAllStories()
        // res.render('blog',{
        //     stories,
        //})
    } catch (error){
        console.log(error)
    }
})

//@description : to render the blog page
// @ route :get '/blog'
router.get('/blog/:post', async(req, res)=>{
    try {
        const postId = req.params.post
        const stories= await getAstory(postId);
        // res.render('blog',{
        //     stories,
        //})
    } catch (error){
        console.log(error)
    }
})



module.exports= router