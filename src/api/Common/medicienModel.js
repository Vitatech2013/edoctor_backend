import mongoose, { Schema } from 'mongoose'

const medicienSchema = new Schema({
    Problem: {
        type: String
    },
    Precautions: {
        type: String
    },
    Medicienes: {
        type: String
    }
   
}, {
        timestamps: true
    });

const doctorRegModel = mongoose.model('Medicienes', medicienSchema)

export default doctorRegModel