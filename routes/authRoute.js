import express from 'express';
import authControllers from '../controllers/authControllers.js';

const route=express.Router();
const {userLogin,userSignup}=authControllers;

route.post('/signup',userSignup);
route.post('/login',userLogin)

export default route;