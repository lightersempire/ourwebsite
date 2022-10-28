const Blog = require ('../models/blog');
require('dotenv').config();



class BlogService{
    async createBlog(data){


        // to create a new user
        const blog =  new Blog ({
            title : data.title,
            content : data.content,
            photo : data.photo,
        })

        try{
            const savedBlog = await blog.save();
            console.log('User created successfully :', savedBlog);


        return "savedBlog";
        }
        catch (error){
            console.log(error)
        }
    }


    async getAllStories() {
    return await Blog.find({}).lean();
  }

  async getAstory(data) {
    return await Blog.findOne({_id : data}).lean();
  }

  async deleteStory(data){
    return await Blog.findOneAndDelete({_id : data})
  }


}

module.exports = new BlogService;