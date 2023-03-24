import mongoose, { Schema } from 'mongoose'

const doctorSchema = new Schema({
    dname: {
        type: String
    },
    dfathername: {
        type: String
    },
    demailid: {
        type: String
    },
    dpassword: {
        type: String
    },
    ddoj: {
        type: String
    },
    dspecilization: {
        type: String
    },
    dphone: {
        type: String
    },
    dschedule: {
        type: String
    },
    Timings: {
        type: String
    },
    daddress: {
        type: String
    },
    HospitalName: {
        type: String
    },
}, {
        timestamps: true
    });

const doctorRegModel = mongoose.model('Doctors', doctorSchema)

export default doctorRegModel