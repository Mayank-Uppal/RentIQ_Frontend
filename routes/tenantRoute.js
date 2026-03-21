import express from 'express'
const route=express.Router();
import { inviteTenant } from '../controllers/tenantController.js';
import { fetchDetails } from '../controllers/tenantController.js';
import verifyToken from '../middlewares/verifyToken.js';
import { tenantProfile } from '../controllers/tenantController.js';
import { updateRent } from '../controllers/tenantController.js';
import {rentArray} from '../controllers/tenantController.js';

route.get('/invite/:token',inviteTenant);
route.get('/',verifyToken,fetchDetails);
route.post('/profile',verifyToken,tenantProfile);
route.patch('/:tenantId',verifyToken,updateRent);
route.get('/rent/:tenantId',verifyToken,rentArray);

export default route;