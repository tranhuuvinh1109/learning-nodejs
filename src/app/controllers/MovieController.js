import Movie from "../models/MovieModel.js";

class AuthController {
	async createNewMovie (req, res, next) {
		try {
			if (req.body) {
				const user = new Movie(req.body);
				await user.save()
					.then(() => res.status(200).json({ message: 'created movie successfully!!!', data: user }))
					.catch(() => res.status(400).json({ message: 'error' }))

			} else {
				res.status(400).json({ message: 'data null' });
			}

		} catch (err) {
			res.status(500).json({ error: err });
		}
	}
	async getAllMovie (req, res, next) {
		try {
			const movies = await Movie.find();

			if (movies.length > 0) {
				res.status(200).json({ data: movies, message: 'Get Movie successfully!!!' });
			} else {
				res.status(404).json({ data: [], message: 'Movie not found!!!' });
			}
		} catch (err) {
			res.status(500).json({ error: err });
		}
	}

}
export default new AuthController();