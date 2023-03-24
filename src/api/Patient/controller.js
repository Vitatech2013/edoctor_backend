import patientRegModel from '../Common/patientRegModel';
import appoinmentRegModel from '../Common/appoinmentRegModel';
import hospitalRegModel from '../Common/hospitalRegModel';
import doctorRegModel from '../Common/doctorRegModel';
import {sendEmail} from '../Common/email';

export const patientLogin = (req, res) => {
  patientRegModel.findOne({ "name": req.query.name, "password": req.query.password }, (err, result) => {
    res.send(result);
  })
}

export const viewPatientprofile = (req, res) => {
  patientRegModel.findOne({ "name": req.query.name }, (err, result) => {
    res.send(result);
  })
}

export const addPatient = (req, res) => {
  patientRegModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
export const patientforgotPassword = (req, res) => {
  patientRegModel.find({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
      const subject = 'Credentials Recived';
      const body = `name: ${results.name}<br>password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
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

export const viewAppoinment = (req, res) => {
  appoinmentRegModel.find({ "name": req.query.name },(err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}

export const bookAppoinment = (req, res) => {
  appoinmentRegModel.create(req.body, (err, result) => {
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

export const viewDoctor = (req, res) => {
  doctorRegModel.find((err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}