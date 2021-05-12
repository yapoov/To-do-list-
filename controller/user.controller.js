const { decode } = require("jsonwebtoken");
const db = require("../model");
const Role =db.role;
const User = db.user;
const Todo = db.todo;


exports.allAccess = (req, res) =>{
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    Todo.find({author: decoded.userId},(err,todos)=>{
    if (err) return console.log(err);

    return res.status(200).json({
        title: 'success',
        todos: todos
    });
    }
    );
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };