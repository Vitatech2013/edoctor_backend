import mongoose, { Schema } from 'mongoose'

const patientSchema = new Schema({
    name: {
        type: String,
    },
    fathername: {
        type: String,
    },
    emailid: {
        type: String,
    },
    password: {
        type: String,
    },
    dob: {
        type: String,
    },
    phone: {
        type: String
    },
    gender: {
        type: String
    },

    address: {
        type: String
    },
   
}, {
        timestamps: true
    });

const patientRegModel = mongoose.model('Patients', patientSchema)

export default patientRegModel