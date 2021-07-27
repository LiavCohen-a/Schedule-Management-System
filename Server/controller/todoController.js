const todoBL = require('../models/todoBL');
const express = require('express');
const router = express.Router();


router.route('/').get(async function(req,resp)
    {
        let data = await todoBL.GetAllTodos()
        return resp.json(data)
    })
router.route('/:id').get(async function(req,resp)
    {
        let TodoID = req.params.id;
        let data = await todoBL.GetTodoByID(TodoID)
        return resp.json(data)
    })
router.route('/').post(async function(req,resp)
    {
        let newTodoData = req.body;
        let data = await todoBL.AddTodo(newTodoData)
        return resp.json(data)
    })
router.route('/:id').put(async function(req,resp)
    {
        let TodoID = req.params.id;
        let newTodoData = req.body;
        let data = await todoBL.UpdateTodo(TodoID,newTodoData)
        return resp.json(data)
    })
router.route('/:id').delete(async function(req,resp)
    {
        let TodoID = req.params.id;
        let data = await todoBL.DeleteTodo(TodoID)
        return resp.json(data)
    })
module.exports = router;