import hospitalRegModel from '../Common/hospitalRegModel';
import doctorRegModel from '../Common/doctorRegModel';
import patientRegModel from '../Common/patientRegModel';
import appoinmentRegModel from '../Common/appoinmentRegModel';
import {sendEmail} from '../Common/email';


export const hospitalLogin = (req, res) => {
  hospitalRegModel.findOne({ "hospitalname": req.query.hospitalname, "password": req.query.password }, (err, result) => {
    res.send(result);
  })
}

export const viewHospitalprofile = (req, res) => {
  hospitalRegModel.findOne({ "hospitalname": req.query.hospitalname }, (err, result) => {
    res.send(result);
  })
}
export const hospitalviewdoctors = (req, res) => {
  doctorRegModel.find({ "HospitalName": req.query.HospitalName }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewHospital = (req, res) => {
  hospitalRegModel.find((err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}

export const addHosptial = (req, res) => {
  hospitalRegModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
export const forgotPassword = (req, res) => {
  hospitalRegModel.find({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
      const subject = 'Credentials Recived';
      const body = `hospitalname: ${results.hospitalname}<br>password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
      sendEmail(req.query.emailid, subject, body);
      })
      res.send(result);
    }
  })
}
export const viewPatient = (req, res) => {
  patientRegModel.find((err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}

export const viewDoctor = (req, res) => {
  doctorRegModel.find((err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}

export const viewAppoinment = (req, res) => {
  appoinmentRegModel.find({"HospitalName":req.query.HospitalName},(err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}
