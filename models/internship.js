import mongoose from "mongoose";
import enumType from "./enumType.js";
const {Schema, model} = mongoose;

const internshipSchema = new Schema(
    {
        reportFile: {
            data: Buffer, 
            contentType: String, 

        },
        attestationFile: {
            data: Buffer, 
            contentType: String, 
    
        },
        journalFile: {
            data: Buffer, 
            contentType: String, 
            
        },
        mark: {
            type: Number,
        },
        isValidated: {
            type: Boolean,
        },
        type:{
            type: String,
            enum: Object.values(enumType),
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "users"
        }
    }
);

export default model("Internship", internshipSchema);