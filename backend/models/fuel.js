import mongoose from "mongoose";

const fuelSchema = new mongoose.Schema(
{
    tripId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Trip"
    },
    litres:Number,
    cost:Number
},
{timestamps:true}
);

export default mongoose.model("Fuel",fuelSchema);