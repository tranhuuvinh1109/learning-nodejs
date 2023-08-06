import Cart from "../models/CartModel.js";

class CartController {
    async createNewCart(req, res) {
        try {
            if (req.body) {
                const cart = new Cart(req.body);
                await cart.save()
                    .then(() => res.status(200).json({ message: 'created successfully', data: cart }))
                    .catch(() => res.status(404).json({ message: 'error' }));
            } else {
                res.status(404).json({ message: 'error' });
            }
        } catch (error) {
            res.status(500).json({ message: 'error' });
        }
    }

    async getAllCart(req, res) {
        try {
            const allCarts = await Cart.find();
            if (allCarts) {
                res.status(200).json({ message: 'data exist', data: allCarts });
            } else {
                res.status(400).json({ message: 'data null' });
            }
        } catch (error) {
            res.status(500).json({ message: 'data error' });
        }
    }
}


export default new CartController();
