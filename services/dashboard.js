import { Mongoose } from 'mongoose';
import propertyModel from '../models/property.js';

const details=async(ownerId)=>{
    try {
        const response=await propertyModel.find({ownerId});
        const totalProperties=await propertyModel.aggregate([
            {$match:{ownerId:mongoose.Types.ObjectId(ownerId)}},
            {$group:{_id:"$ownerId",response:{$sum:1}}}
        ])
        const properties=totalProperties.reduce((acc,prop)=>acc+prop.response,0);
        const totalTenants=response.reduce((acc,props)=>acc+(props.tenant?.length || 0),0);
        const totalRent=response.reduce((acc,prop)=>acc+prop.rent,0);
        return {"properties":properties,"totalTenants":totalTenants,"totalRent":totalRent};
    } catch (error) {
        return error;
    }
}

export default details;