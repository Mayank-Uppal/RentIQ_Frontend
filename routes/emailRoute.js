import express from 'express';
import verifyToken from '../middlewares/verifyToken.js';
const route=express.Router();
import invite from '../controllers/emailController.js';
import roleAccess from '../middlewares/RoleAccess.js';
const {sendInvite,acceptInvite}=invite

route.post('/:propertyId/invite',verifyToken,sendInvite);
route.get('/verify-tenant/:token',acceptInvite);

export default route;