import authRouter from "./auth.js";
import movieRouter from "./movie.js";

function routes (app) {
	app.use('/movie', movieRouter)
	app.use('/auth', authRouter)
}

export default routes;