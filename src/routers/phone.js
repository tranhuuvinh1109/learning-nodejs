import express from 'express';
import PhoneController from '../app/controllers/PhoneController.js';

const phoneRouter = express.Router();

phoneRouter.post('/createNewPhone', PhoneController.createNewPhone);

export default phoneRouter;