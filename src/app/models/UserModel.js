
import mongoose from 'mongoose';
const { Schema } = mongoose;

// 0: user, 1: admin
const UserSchema = new Schema(
	{
		email: { type: String, required: true, unique: true },
		username: { type: String, required: true },
		phone: { type: String },
		avatar: { type: String },
		role: { type: String, required: true, default: "0" },
		password: { type: String, required: true }
	},
	{
		timestamps: true,
	},
);

const User = mongoose.model('User', UserSchema);
export default User;