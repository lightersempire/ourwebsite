const Blog = require ('../models/blog');

const {
    createBlog,
    getAllStories,
    getAstory,
    deleteStory,
} = require ('../services/blog')

class BlogController {
    // to register a user
    async createBlog(req, res){   
        // check for duplicate email
        const newStory = new Blog ({
            title : req.body.title,
            content : req.body.content,
            photo : req.file.filename,
        })

        try{
            const savedBlog = await newStory.save();
            console.log('blog created successfully :', savedBlog);
        if (savedBlog){
            return res.status(200).json({value:"success"})
        }
        }
        catch (error){
            console.log(error)
        }
        

    }


    async getAllStories(req, res){
        const allStories = await getAllStories();
        if(allStories){
            res.status(200)
            return allStories
        }
    }

    async getAstory(req, res){
        const story = await getAstory(req.params);
        if(story){
            res.status(200)
            return story
        }
    }

        async deleteStory(req, res){
        const deleted = await deleteStory(req.params.id);
        if(deleted){
            res.status(200)
            return deleted
        }
    }
    
}

module.exports = new BlogController