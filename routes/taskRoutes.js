const express = require('express');
const router = express.Router();
const { body } = require('express-validator');


const {
    createTasks,
    getTasks,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/taskController');

const validateTask = [
    body('title')
        .notEmpty().withMessage('Title is Required')
        .isLength({ min: 3 }).withMessage('Title must be atleast 3 characters long')
];

// ROUTES
router.post("/",  validateTask, createTasks);
router.get("/", getTasks);
router.get("/:id", getTask);
router.put("/:id",  validateTask, updateTask);
router.delete("/:id", deleteTask);

module.exports = router;