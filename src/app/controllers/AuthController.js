import User from "../models/UserModel.js";

class AuthController {
	async register(req, res, next) {
		try {
			if (req.body) {
				const user = new User(req.body);
				await user.save()
					.then(() => res.status(200).json({ message: 'created successfully', data: user }))
					.catch(() => res.status(400).json({ message: 'error' }))

			} else {
				res.status(400).json({ message: 'data null' });
			}

		} catch (err) {
			res.status(500).json({ error: err });
		}
	}
	async getAllUser(req, res) {
		try {
			const allUsers = await User.find();
			if (allUsers) {
				res.status(200).json({ message: 'data exist', data: allUsers });
			} else {
				res.status(400).json({ message: 'data null' });
			}
		} catch (error) {
			res.status(500).json({ message: 'data error' });
		}
	}
	async getUserById(req, res) {
		try {
			const user = await User.findById(req.body.id);
			if (user) {
				res.status(200).json({ message: 'user exist', data: user });
			} else {
				res.status(400).json({ message: 'user not exist' });
			}
		} catch (error) {
			res.status(500).json({ message: 'data error' });
		}
	}
}
export default new AuthController();