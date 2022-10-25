const express = require ('express');
const router = express.Router();
const Member = require('../models/members');


const {
    getMembers,
    getforeignMembers,
    getLocalMembers,
    getALLMembersCount,
    getforeignMembersCount,
    getLocalMembersCount,
} = require('../services/members')

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

module.exports= router