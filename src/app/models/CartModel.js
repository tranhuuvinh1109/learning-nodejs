
import mongoose from 'mongoose';
const { Schema } = mongoose;

const CartSchema = new Schema(
	{
		idPhone: { type: Array, required: true },
		idUser: { type: String, required: true }
	},
	{
		timestamps: true,
	},
);

const Cart = mongoose.model('Cart', CartSchema);
export default Cart;