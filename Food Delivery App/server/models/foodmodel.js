import mongoose from 'mongoose'

const foodschema=new mongoose.Schema({
    name:{type:String,requires:true},
    description:{type:String,requires:true},
    category:{type:String,requires:true},
    price:{type:Number,requires:true},
    image:{type:String,requires:true}
})

const foodmodel = mongoose.models.food || mongoose.model("food",foodschema);

export default foodmodel;