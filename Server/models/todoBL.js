const todoModel = require('./todoModel')

exports.GetAllTodos = function()
{
    return new Promise((resolve,reject)=>
    {
        todoModel.find({},function(err,data)
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
exports.GetTodoByID = function(TodoID)
{
    return new Promise((resolve,reject)=>
    {
        todoModel.findById(TodoID,function(err,data)
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
exports.UpdateTodo = function(TodoID,TodoNewData)
{
    return new Promise((resolve,reject)=>
    {
        todoModel.findByIdAndUpdate(TodoID,TodoNewData,function(err,data)
        {
            if(err)
            {
                reject(err);
            }
            else
            {   
                resolve("Todo Was Updated");
            }
        })
    })
}
exports.AddTodo = function(newTodoData)
{
    return new Promise((resolve,reject)=>
    {
        let newTodo = new todoModel({
            title: newTodoData.title,
            userID : newTodoData.userID,
            completed : false,          
        })
        newTodo.save(function(err){
            if(err)
            {
                resolve(err)
            }
            else
            {
                resolve('To do Was Created')
            }
        })       
    })
}
exports.DeleteTodo = function(TodoID)
{
    return new Promise((resolve,reject)=>
    {
        todoModel.findByIdAndDelete(TodoID,function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("todo Was Deleted")
                
            }
        })
    })
}