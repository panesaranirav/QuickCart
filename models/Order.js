import mongoose from "mongoose";

const  orderSchema = new mongoose.Schema({
    useId:{type:String, require:true , ref:'user'},
    items:[{
        product:{type:String ,require:true ,ref:'product'},
        quantity:{type:Number,require:true},
    }],
    amount:{type:Number,require:true},
    address:{type:String , require:true , ref:'address'},
    status:{type:String,require:true , default:'Order Placed'},
    date:{type:Number,require:true},
})

const Order = mongoose.models.order || mongoose.model('order',orderSchema)

export default Order;