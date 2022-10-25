const Member = require ('../models/members');

const {
    createMember,
    getMembers,
    getforeignMembers,
    getLocalMembers,
    getALLMembersCount,
    getforeignMembersCount,
    getLocalMembersCount,
} = require ('../services/members')

class UserController {
    // to register a user
    async register(req, res){   
        // check for duplicate email
        const email = await Member.findOne({email:req.body.email})      
        if (email) return res.status(200).json({email})
        const newMember = await createMember(req.body);
        if (newMember){
            return res.status(200).json({value:"success"})
        }
    }


    async getMembers(req, res){
        const allMembers = await getMembers();
        if(allMembers){
            res.status(200)
            return allMembers
        }
    }

    async getforeignMembers(req, res){
        const foreignMembers = await getforeignMembers();
        if(foreignMembers){
            res.status(200)
            return foreignMembers
        }
    }

        async getLocalMembers(req, res){
        const localMembers = await getLocalMembers();
        if(localMembers){
            res.status(200)
            return localMembers
        }
    }

        async getALLMembersCount(req, res){
        const allMembers = await getALLMembersCount();
        if(allMembers){
            res.status(200)
            return allMembers
        }
    }

        async getforeignMembersCount(req, res){
        const foreignMembers = await getforeignMembersCount();
        if(foreignMembers){
            res.status(200)
            return foreignMembers
        }
    }

        async getLocalMembersCount(req, res){
        const localMembers = await getLocalMembersCount();
        if(localMembers){
            res.status(200)
            return localMembers
        }
    }
    
}

module.exports = new UserController