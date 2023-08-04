import express from 'express';
import User from '../app/models/UserModel.js'; // Make sure to use the correct file extension .js
import AuthController from '../app/controllers/AuthController.js';

const authRouter = express.Router();

// get, post, put, patch

authRouter.post('/register', AuthController.register);

authRouter.get('/getAllUser', AuthController.getAllUser);
authRouter.get('/getUserById', AuthController.getUserById);

authRouter.put('/updateUserById/:id', AuthController.updateUserById);
authRouter.put('/updateUserByName/:name', AuthController.updateUserByName);

authRouter.delete('/deleteUserById/:id', AuthController.deleteUserById);
authRouter.delete('/deleteUserByName/:name', AuthController.deleteUserByName);



export default authRouter;
