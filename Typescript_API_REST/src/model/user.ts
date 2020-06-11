import { Schema, model,Document } from "mongoose";

export interface IUser extends Document{
    username: string,
    email: string,
    pass: string
}

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        min: 4,
        lowercase:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true
    },
    pass:{
        type: String,
        required:true
    }
})

export default model<IUser>('User', userSchema)