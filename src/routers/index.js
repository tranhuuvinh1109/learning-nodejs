import authRouter from "./auth.js";
import phoneRouter from "./phone.js";

function routes(app) {
	app.use('/auth', authRouter)
	app.use('/phone', phoneRouter)
}

export default routes

// /auth/register post