
import mongoose from 'mongoose';
const { Schema } = mongoose;

const CartSchema = new Schema(
	{
		idPhone: { type: Array, default: [] },
		idUser: { type: String }
	},
	{
		timestamps: true,
	},
);

const Cart = mongoose.model('Cart', CartSchema);
export default Cart;