import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    userId:{type:String , require:true},
    fullName:{type:String , require:true},
    PhoneNumber:{type:String , require:true},
    pincode:{type:Number , require:true},
    area:{type:String , require:true},
    city:{type:String , require:true},
    state:{type:String , require:true}
})

const Address = mongoose.models.address || mongoose.model('address',addressSchema)


export default Address;