import Fuel from "../models/Fuel.js";

export const addFuel = async(req,res)=>{
    const fuel = await Fuel.create(req.body);
    res.json(fuel);
};

export const getFuel = async(req,res)=>{
    const fuel = await Fuel.find().populate("tripId");
    res.json(fuel);
};