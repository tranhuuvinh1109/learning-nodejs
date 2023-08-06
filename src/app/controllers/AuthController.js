import User from "../models/UserModel.js";
import bcrypt from 'bcrypt';
class AuthController {
	async login (req, res, next) {
		try {
			if (req.body) {
				console.log('email ->>', req.body.email);
				console.log('pass ->>', req.body.password);
				const user = await User.findOne({ email: req.body.email });
				if (!user) {
					return res.status(404).json({ message: 'User not found' });
				}
				const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

				if (!isPasswordValid) {
					return res.status(401).json({ message: 'Invalid password' });
				}
				return res.status(200).json({ message: 'Login successful!', data: user });
			} else {
				return res.status(400).json({ message: 'data null' });
			}

		} catch (err) {
			return res.status(500).json({ error: err });
		}
	}
	async register (req, res, next) {
		try {
			if (req.body) {
				const hashedPassword = await bcrypt.hash(req.body.password, 12);
				const user = new User({
					email: req.body.email,
					name: req.body.name,
					image: req.body.image,
					password: hashedPassword
				});
				await user.save()
					.then(() => res.status(200).json({ message: 'created successfully', data: user }))
					.catch(() => res.status(400).json({ message: 'error' }))

			} else {
				return res.status(400).json({ message: 'data null' });
			}

		} catch (err) {
			return res.status(500).json({ error: err });
		}
	}
}
export default new AuthController();