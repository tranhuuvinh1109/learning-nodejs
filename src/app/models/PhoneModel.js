
import mongoose from 'mongoose';
const { Schema } = mongoose;

// 0: user, 1: admin
const PhoneSchema = new Schema(
	{
		name: { type: String, required: true },
		brand: { type: String, required: true },
		price: { type: Number },
		image: { type: String }
	},
	{
		timestamps: true,
	},
);

const Phone = mongoose.model('Phone', PhoneSchema);
export default Phone;