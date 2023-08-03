import mongoose from 'mongoose';
import enumSpeciality from './enumSpeciality';
import enumOption from './enumOption';
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        speciality: {
            type: String,
            enum: Object.values(enumSpeciality),
            required: true,
        
        },
        option: {
            type: String,
            enum: Object.values(enumOption),
            required: true,
            
        },
        year: {
            type: Number,
        },
        password: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        }
    },
);


export default model("User", userSchema);