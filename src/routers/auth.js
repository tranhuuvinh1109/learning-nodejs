import express from 'express';
import User from '../app/models/UserModel.js'; // Make sure to use the correct file extension .js
import AuthController from '../app/controllers/AuthController.js';

const authRouter = express.Router();

// get, post, put, patch

// authRouter.get('/getAllUser', async (req, res) => {
// 	try {
// 		const users = await User.find();
// 		if (users && users.length > 0) {
// 			res.status(200).json({ data: users });
// 		} else {
// 			res.status(404).json({ error: 'Not Found' });
// 		}
// 	} catch (error) {
// 		res.status(500).json({ error: 'Internal Server Error' });
// 	}
// });
authRouter.post('/register', AuthController.register);

export default authRouter;
