const express = require ('express');
const router = express.Router();
const Member = require('../models/members');
const upload = require ('../middlewares/multer');


const {
    getMembers,
    getforeignMembers,
    getLocalMembers,
    getALLMembersCount,
    getforeignMembersCount,
    getLocalMembersCount,
} = require('../services/members')

const {
    createBlog,
} = require ('../controllers/blog')

const {
    deleteStory,
    getAllStories,
    getAstory,
} = require ('../services/blog')

//@description: admin index  page
//@route: GET '/admin/index
router.get('/index',async(req, res)=>{
    try{
    const membersCount = await getALLMembersCount()
    const foreignMembersCount = await getforeignMembersCount()
    const LocalMembersCount = await getLocalMembersCount()
    res.render('index',{
        membersCount,
        foreignMembersCount,
        LocalMembersCount,
    })
    }catch(error){
        console.log(error)
    }
})



//@description: admin get all members  page
//@route: GET '/admin/members
router.get('/members',async (req, res)=>{
    try{
    const members = await getMembers();
    res.render('members',{
        members,
    }) 
    }catch(error){
        console.log(error)
    }

})

//@description: admin get foreign members  page
//@route: GET '/admin/foreign-members
router.get('/foreign-members',async (req, res)=>{
    try{
        const foreignMembers = await getforeignMembers()
        res.render('foreignMembers',{
        foreignMembers,
        })
    }catch(error){
        console.log(error)
    }

})

//@description: admin get LocalMembers  page
//@route: GET '/admin/local-members
router.get('/local-members', async(req, res)=>{
    try{
        const LocalMembers = await getLocalMembers()
        res.render('localMembers',{
        LocalMembers,
    })
    }catch(error){
        console.log(error)
    }

})

//@descript: admin to create a new blog story
//@route : POST /admin/blog
router.post('/blog',upload.single('blogPhoto'),createBlog)

//@descript: admin to get all story
//@route : GET /admin/blog
router.get('/blog',async (req, res)=>{
    try{
        const allStories = await getAllStories();
       const fdate=  new Date(allStories.date);
        const date = fdate.toDateString();
//         const monthNames =['January','February','March','April','May','June','July','August','September','October','November','December'];
//  var d = fdate.getDate();
//  var m = monthNames[fdate.getMonth()];
//  var y = fdate.getFullYear();
//  let date = d+' '+m+' '+y 
        res.render('allBlog', {
            allStories,
            date,
        })
    }catch(error){
        console.log(error)
    }
}) 

//@descript: admin to get a story
//@route : GET /admin/blog/:
// router.get('/blog/:post',async (req, res)=>{
//     try{
//         const story = await getAstory(req.params.deletedPost);
//         res.render('blog', {
//             story,
//         })
//     }catch(error){
//         console.log(error)
//     }
// })

//@descript: admin to get all story
//@route : GET /admin/bloglist
router.get('/bloglist',async (req, res)=>{
    try{
        const allStories = await getAllStories();
        res.render('blogList', {
            allStories,
        })
    }catch(error){
        console.log(error)
    }
}) 

//@descript: admin to delete blog story
//@route : DELETE /admin/blog/:post
router.post('/blog/:post',async (req, res)=>{
    try{
        const deletedPost = await deleteStory(req.params.post);
        if(deletedPost){
           return res.status(200).json({message:"story deleted"})
        }
    }catch(error){
        console.log(error)
    }
} )

module.exports= router