
import mongoose from 'mongoose';
const { Schema } = mongoose;

const UseSchema = new Schema(
	{
		email: { type: String, required: true, unique: true },
		name: { type: String, required: true },
		image: { type: String },
		favorites: { type: Array, default: [] },
		password: { type: String }
	},
	{
		timestamps: true,
	},
);

const User = mongoose.model('User', UseSchema);
export default User;

