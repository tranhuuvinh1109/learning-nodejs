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

	// update user by ID
	async updateUserById(req, res) {
		try {
			const userId = req.params.id; // lấy id từ tham số động
			const updateData = req.body; // dữ liệu cập nhật từ body của yêu cầu

			// sử dụng findOneAndUpdate để cập nhật thông tin người dùng
			const updateUser = await User.findOneAndUpdate({ _id: userId }, updateData, { new: true });

			if (!updateUser) {
				return res.status(400).json({ message: 'user not exist' });
			}
			return res.status(200).json({ message: "User updated successfully", data: updateUser });

		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'data error' });
		}
	}

	async updateUserByName(req, res) {
		try {
			const username = req.params.name; // lấy tên người dùng từ tham số động
			const updateData = req.body;

			// sử dụng findOneAndUpdate để cập nhật thông tin người dùng dựa theo tên người 
			const updatedUser = await User.findOneAndUpdate({ username: username }, updateData, { new: true });

			if (!updatedUser) {
				return res.status(400).json({ message: 'user not exist' });
			}

			return res.status(200).json({ message: "User updated successfully", data: updatedUser });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'data error' });
		}
	}

	async deleteUserById(req, res) {
		try {
			const userId = req.params.id; // lấy id từ tham số động

			// sử dụng findOneAndDelete để xóa người dùng dựa theo id
			const deletedUser = await User.findOneAndDelete({ _id: userId });

			if (!deletedUser) {
				return res.status(400).json({ message: 'user not exist' });
			}

			return res.status(200).json({ message: "User deleted successfully", data: deletedUser });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'data error' });
		}
	}

	async deleteUserByName(req, res) {
		try {
			const username = req.params.name; // lấy id từ tham số động

			// sử dụng findOneAndDelete để xóa người dùng dựa theo id
			const deletedUser = await User.findOneAndDelete({ username: username });

			if (!deletedUser) {
				return res.status(400).json({ message: 'user not exist' });
			}

			return res.status(200).json({ message: "User deleted successfully", data: deletedUser });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'data error' });
		}
	}


}
export default new AuthController();