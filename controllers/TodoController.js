
const express = require('express');
const Todo = require('../models/todo');


exports.renderNewForm=(req, res) => {
    res.render('todos/new', )
};
exports.createTodo=async (req, res) => {
    const Todo= new Todo(req.body.todo);
    await Todo.save();
};

//Get all Todo
exports.showAllTodos= async (req, res) => {
    if (err){
        return res.status(500).json({message:err})
     } else{
        const todos = await Todo.find({
            res.render('todos/index', { todos })
        })
    };
  
};


//Edit Todo

exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    res.render('todos/edit', { todo})
}
exports.updateTodo=async (req, res) => {
    const {id} = req.params;
    const todo = await Todo.findByIdAndUpdate(id, { ...req.body.todo }, (err, todoss=)=>{
        if(err){
            return res.status(500).json({message:err})
        }else{
            res.redirect(`/todo/${todo._id}`);
        }
        });
   
}

   

//Delete Todo
exports.deleteTodo=async (req, res) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.redirect('/todos');
}


