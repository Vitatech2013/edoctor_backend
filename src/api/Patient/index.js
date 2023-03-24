import { Router } from 'express'

import {
  addPatient,
  bookAppoinment,
  viewDoctor,
  viewPatient,
  viewHospital,
  viewAppoinment,
  viewPatientprofile,
  patientLogin,patientforgotPassword

} from './controller'


const router = new Router()

router.post('/patient', addPatient)

router.post('/appoinment', bookAppoinment)

router.get('/patientlogin', patientLogin)

router.get('/pforgotPassword', patientforgotPassword)

router.get('/viewdoctors', viewDoctor)

router.get('/viewpatients', viewPatient)

router.get('/viewhospitals', viewHospital)

router.get('/viewappoinments', viewAppoinment)

router.get('/patientprofile', viewPatientprofile)

export default router