import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    dname: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    HospitalName: {
        type: String
    },
}, {
        timestamps: true
    });
const appoinmentRegModel = mongoose.model('appointments', appointmentSchema)

export default appoinmentRegModel