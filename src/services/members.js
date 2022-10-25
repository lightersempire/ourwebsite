const Member = require ('../models/members');
require('dotenv').config();



class UserService{
    async createMember(data){


        // to create a new user
        const member =  new Member ({
            firstname : data.fname,
            lastname : data.lname,
            phone : data.phone,
            country : data.country,
            state : data.state,
            email : data.email,
            comment : data.comment,
        })

        try{
            const savedMember = await member.save();
            console.log('User created successfully :', savedMember);


        return "savedMember";
        }
        catch (error){
            console.log(error)
        }
    }


    async getMembers() {
    return await Member.find({});
  }

     async getforeignMembers() {
    return await Member.find({country: { $ne: "Nigeria" }});
  }

     async getLocalMembers() {
    return await Member.find({country: "Nigeria"});
  }

  async getALLMembersCount() {
    return await Member.find({}).count();
  }

   async getforeignMembersCount() {
    return await Member.find({country: { $ne: "Nigeria" }}).count();
  }

     async getLocalMembersCount() {
    return await Member.find({country: "Nigeria"}).count();
  }


}

module.exports = new UserService;