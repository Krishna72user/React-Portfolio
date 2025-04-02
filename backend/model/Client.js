import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    first_name:String,
    last_name:String,
    email:String,
    msg:String
})

export const Client = mongoose.model('client',userSchema);