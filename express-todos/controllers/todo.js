const Todo = require('../models/todo');

module.exports = {
index,
create,
delete: deleteOne

};

function index(req,res){
    const todo= Todo.todo;

    res.render('index', {
        title: 'Unit 2 Assesment',
        todo
    })
}

function create(req, res) {
    Todo.todo.push({
        todo: req.body.todo,
        done: false
    });
    res.redirect('/');
}

function deleteOne(req, res) {
    Todo.todo.splice(req.params.id, 1);
    res.redirect('/');
}