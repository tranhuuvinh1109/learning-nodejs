import User from "../models/UserModel.js";

class AuthController {
	async register (req, res, next) {
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
}
export default new AuthController();