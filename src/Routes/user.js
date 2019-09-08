const express = require('express');
const userRouter = express.Router();

const userController = require('../Controllers/user');

userRouter
    .get('/:id_user', userController.getUser)
    .post('/', userController.postUser)
    .patch('/:id_user',userController.patchUser)
    .delete('/:id_user', userController.deleteUser)

module.exports = userRouter;