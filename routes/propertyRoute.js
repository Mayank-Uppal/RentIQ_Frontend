import express from 'express'
const route=express.Router();
import verifyToken from '../middlewares/verifyToken.js';
import { propertyDetails,allProperties,updateProperty,deleteProperty,getpropertyDetails } from '../controllers/propertyController.js';

route.get('/details',verifyToken,allProperties);
route.post('/add-details',verifyToken,propertyDetails);
route.put('/update-details/:propertyId',verifyToken,updateProperty);
route.delete('/delete/:propertyId',verifyToken,deleteProperty);
route.get('/details/:propertyId',verifyToken,getpropertyDetails);

export default route;