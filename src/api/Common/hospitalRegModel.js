import mongoose, { Schema } from 'mongoose'

const hospitalSchema = new Schema({
    hospitalname: {
        type: String,
    },
    estyear: {
        type: String
    },
    emailid: {
        type: String
    },
    password: {
        type: String
    },
    phoneno: {
        type: String
    },
    district: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    address: {
        type: String
    },
    

}, {
        timestamps: true
    });

const hospitalRegModel = mongoose.model('Hospital', hospitalSchema)

export default hospitalRegModel