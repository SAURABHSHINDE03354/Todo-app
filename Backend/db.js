const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todoapp')

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed : Boolean
})

const todos = mongoose.model('todos',todoSchema);

module.exports = {
    todos
}