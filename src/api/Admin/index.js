import { Router } from 'express'

import {
    adminLogin,
    viewDoctor,
    viewPatient,
    viewHospital,
    viewAppoinment,
    updateDoctor,
    updateHospital,
    updatePatient,
    updateAppoinment,
    deletedoctor,
    deletehospital,
    deleteappoinment,
    deletepatient,
    updatePassword,
    admincreate,
    forgotPassword


} from './controller'


const router = new Router()

router.get('/adminlogin', adminLogin)

router.post('/create', admincreate)

router.get('/forgotPassword', forgotPassword)

router.get('/viewdoctors', viewDoctor)

router.get('/viewpatients', viewPatient)

router.get('/viewhospitals', viewHospital)

router.get('/viewappoinments', viewAppoinment)

router.put('/:id', updateDoctor)

router.put('/update/:id', updateHospital)

router.put('/updatepassword/:id', updatePassword)

router.put('/updatePatient/:id', updatePatient)

router.put('/updateAppoinment/:id', updateAppoinment)

router.delete('/deletedoctor/:id', deletedoctor)

router.delete('/deletehospital/:id', deletehospital)

router.delete('/deleteappoinment/:id', deleteappoinment)

router.delete('/deletepatient/:id', deletepatient)

export default router