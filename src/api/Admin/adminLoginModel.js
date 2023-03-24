import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    emailid: {
        type: String
    }
}, {
        timestamps: true
    });
const adminLoginModel = mongoose.model('admins', adminSchema)

export default adminLoginModel