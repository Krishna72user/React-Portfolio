import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    first_name:String,
    last_name:String,
    email:String,
    msg:{type:String,default:"I want to connect."}
})

export const Client = mongoose.model('client',userSchema);