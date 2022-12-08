"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Added Todo', todo: newTodo, todos: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const todoId = params.todoId;
    const body = req.body;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === todoId);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text
        };
        return res.status(200).json({ message: 'Updated Todo', todos: todos });
    }
    res.status(404).json({ message: 'Todo not found' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const todoId = params.todoId;
    todos = todos.filter(todoItem => todoItem.id !== todoId);
    res.status(200).json({ message: 'Deleted todo', todos: todos });
});
exports.default = router;