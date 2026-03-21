import express from 'express';
const route=express.Router();
import summary from '../controllers/dashboardController.js';

route.get('/dashboard',verifyToken,summary);

export default route;