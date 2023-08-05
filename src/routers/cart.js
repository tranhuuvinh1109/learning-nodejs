import express from 'express';
import CartController from '../app/controllers/CartController.js';

const cartRouter = express.Router();

cartRouter.post('/createNewCart', CartController.createNewCart);

// phoneRouter.get('/getAllPhone', PhoneController.getAllPhone);
// phoneRouter.get('/getPhoneById/:id', PhoneController.getPhoneById);
// phoneRouter.get('/getPhoneByName/:name', PhoneController.getPhoneByName);

// phoneRouter.put('/updatePhoneById/:id', PhoneController.updatePhoneById);
// phoneRouter.put('/updatePhoneByName/:name', PhoneController.updatePhoneByName);

// phoneRouter.delete('/deletePhoneById/:id', PhoneController.deletePhoneById);
// phoneRouter.delete('/deletePhoneByName/:name', PhoneController.deletePhoneByName);


export default cartRouter;