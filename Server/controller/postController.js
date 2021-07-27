const postBL = require('../models/postBL');
const express = require('express');
const router = express.Router();


router.route('/').get(async function(req,resp)
    {
        let data = await postBL.GetAllPosts()
        return resp.json(data)
    })
router.route('/:id').get(async function(req,resp)
    {
        let postID = req.params.id;
        let data = await postBL.GetPostByID(postID)
        return resp.json(data)
    })
router.route('/').post(async function(req,resp)
    {
        let newPostData = req.body;
        let data = await postBL.AddPost(newPostData)
        return resp.json(data)
    })
router.route('/:id').put(async function(req,resp)
    {
        let postID = req.params.id;
        let newPostData = req.body;
        let data = await postBL.UpdatePost(postID,newPostData)
        return resp.json(data)
    })
router.route('/:id').delete(async function(req,resp)
    {
        let postID = req.params.id;
        let data = await postBL.DeletePost(postID)
        return resp.json(data)
    })
module.exports = router;