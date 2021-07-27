const postModel = require('./postModel')

exports.GetAllPosts = function()
{
    return new Promise((resolve,reject)=>
    {
        postModel.find({},function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}
exports.GetPostByID = function(PostID)
{
    return new Promise((resolve,reject)=>
    {
        postModel.findById(PostID,function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
                
            }
        })
    })
}
exports.UpdatePost = function(PostID,PostNewData)
{
    return new Promise((resolve,reject)=>
    {
        postModel.findByIdAndUpdate(PostID,PostNewData,function(err,data)
        {
            if(err)
            {
                reject(err);
            }
            else
            {   
                resolve("Post Was Updated");
            }
        })
    })
}
exports.AddPost = function(newPostData)
{
    return new Promise((resolve,reject)=>
    {
        let newPost = new postModel({
            title: newPostData.title,
            userID : newPostData.userID,
            body :newPostData.body,          
        })
        newPost.save(function(err){
            if(err)
            {
                resolve(err)
            }
            else
            {
                resolve('Post Was Created')
            }
        })       
    })
}
exports.DeletePost = function(PostID)
{
    return new Promise((resolve,reject)=>
    {
        postModel.findByIdAndDelete(PostID,function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Post Was Deleted")
                
            }
        })
    })
}