import express from 'express';
import MovieController from '../app/controllers/MovieController.js';

const movieRouter = express.Router();

movieRouter.get('/getAll', MovieController.getAllMovie);
movieRouter.post('/create', MovieController.createNewMovie);

export default movieRouter;
