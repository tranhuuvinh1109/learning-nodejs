import authRouter from "./auth.js";
import phoneRouter from "./phone.js";
import cartRouter from "./cart.js";

function routes(app) {
	app.use('/auth', authRouter)
	app.use('/phone', phoneRouter)
	app.use('/cart', cartRouter)
}

export default routes

// /auth/register post