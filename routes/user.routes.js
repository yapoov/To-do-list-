const { authJwt } = require("../middleware");
const controller = require("../controller/user.controller");
const db = require('../model');
const Todo = db.todo;

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get('/todos', [authJwt.verifyToken], (req, res) => {
      Todo.find({ author: decoded.userId }, (err, todos) => {
        if (err) return console.log(err);
  
        return res.status(200).json({
          title: 'success',
          todos: todos
        });
      })
  })

  app.post('/todo',[authJwt.verifyToken], (req, res) => {

  
      let newTodo = new Todo({
        title: req.body.title,
        isCompleted: false,
        author: decoded.userId
      });
  
      newTodo.save(error => {
        if (error) return console.log(error);
        return res.status(200).json({
          title: "successfully added",
          todo: newTodo
        })
      })
  })
  
  app.put('/todo/:todoId',[authJwt.verifyToken], (req, res) => {
  
      Todo.findOne({ author: decoded.userId, _id: req.params.todoId }, (err, todo) => {
        if (err) return console.log(err);
  
        todo.isCompleted = true;
        todo.save(error => {
          if (error) return console.log(error);

          return res.status(200).json({
            title: 'success',
            todo: todo
          });
        });
      })
    })
 
};