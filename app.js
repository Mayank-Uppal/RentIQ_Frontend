import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userAuth from './routes/authRoute.js'
import propertyRoute from './routes/propertyRoute.js'
import emailRoute from './routes/emailRoute.js';
dotenv.config();
import tenantRoute from './routes/tenantRoute.js';
import ownerRoute from './routes/ownerRoute.js';

const app=express();
const PORT = process.env.port || 3000;
connectDB();
app.use(cors());
app.use(express.json());


app.use('/auth',userAuth);
app.use('/property',propertyRoute)
app.use('/property',emailRoute)
app.use('/Tenant',tenantRoute)
app.use('/Owner',ownerRoute);

app.listen(PORT,(req,res)=>{
    console.log(`Backend server running successfully on port ${process.env.port}`);
})
