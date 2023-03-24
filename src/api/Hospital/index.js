import { Router } from 'express'

import {
  addHosptial,
  viewDoctor,
  viewPatient,
  viewHospital,
  viewHospitalprofile,
  hospitalLogin,
  viewAppoinment,
  forgotPassword,
  hospitalviewdoctors

} from './controller'

const router = new Router()

router.post('/hospital', addHosptial)

router.get('/hospitallogin', hospitalLogin)

router.get('/hforgotPassword', forgotPassword)

router.get('/viewdoctors', viewDoctor)

router.get('/viewpatients', viewPatient)

router.get('/viewhospitals', viewHospital)

router.get('/hospitalprofile', viewHospitalprofile)

router.get('/viewappoinments', viewAppoinment)

router.get('/hospitalviewdoctors', hospitalviewdoctors)

export default router