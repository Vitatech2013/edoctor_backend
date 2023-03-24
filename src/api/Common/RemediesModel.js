import mongoose, { Schema } from 'mongoose'

const remediesSchema = new Schema({
    Problem: {
        type: String
    },
    Ingredients: {
        type: String
    },
    Procedure: {
        type: String
    },
    Precautions: {
        type: String
    }
   
}, {
        timestamps: true
    });

const doctorRegModel = mongoose.model('Remedies', remediesSchema)

export default doctorRegModel