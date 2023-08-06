import mongoose from 'mongoose';
const { Schema } = mongoose;

const MovieSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		videoUrl: { type: String },
		thumbnailUrl: { type: String },
		genre: { type: Array, default: [] },
		duration: { type: String },
	}
);

const Movie = mongoose.model('Movie', MovieSchema);
export default Movie;

