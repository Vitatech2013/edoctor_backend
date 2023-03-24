import { Router } from 'express'

import {
  addDoctor,
  viewDoctor,
  viewPatient,
  viewHospital,

  viewDoctorprofile,
  doctorLogin,
  viewAppoinment,
  addMedicien,
  addRemedies,
  searchMedecienes,
  searchRemedies,
  viewMedecienes,
  viewRemedies,
  forgotPassword,
  searchDoctors,

} from './controller'


const router = new Router()

router.post('/doctor', addDoctor)

router.get('/dforgotPassword', forgotPassword)

router.post('/addmedicien', addMedicien)

router.post('/addremedies', addRemedies)

router.get('/doctorlogin', doctorLogin)

router.get('/viewdoctors', viewDoctor)

router.get('/viewpatients', viewPatient)

router.get('/viewhospitals', viewHospital)

router.get('/viewappoinments', viewAppoinment)

router.get('/doctorprofile', viewDoctorprofile)

router.get('/searchMedecienes', searchMedecienes)

router.get('/searchRemedies', searchRemedies)

router.get('/viewMedecienes', viewMedecienes)

router.get('/searchDoctors', searchDoctors)

router.get('/viewRemedies', viewRemedies)

export default router