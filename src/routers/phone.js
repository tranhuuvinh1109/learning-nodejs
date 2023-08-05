import express from 'express';
import PhoneController from '../app/controllers/PhoneController.js';

const phoneRouter = express.Router();

phoneRouter.post('/createNewPhone', PhoneController.createNewPhone);

phoneRouter.get('/getAllPhone', PhoneController.getAllPhone);
phoneRouter.get('/getPhoneById/:id', PhoneController.getPhoneById);
phoneRouter.get('/getPhoneByName/:name', PhoneController.getPhoneByName);

phoneRouter.put('/updatePhoneById/:id', PhoneController.updatePhoneById);

export default phoneRouter;