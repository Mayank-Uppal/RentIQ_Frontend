import express from 'express'
import verifyToken from '../middlewares/verifyToken.js';
import {ownerProfile} from '../controllers/ownerController.js';

const route=express.Router();

route.post('/profile',verifyToken,ownerProfile);

export default route;