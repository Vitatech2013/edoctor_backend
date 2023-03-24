import doctorRegModel from '../Common/doctorRegModel';
import hospitalRegModel from '../Common/hospitalRegModel';
import patientRegModel from '../Common/patientRegModel';
import medicienModel from '../Common/medicienModel';
import remediesModel from '../Common/RemediesModel';
import appoinmentRegModel from '../Common/appoinmentRegModel';
import {sendEmail} from '../Common/email';

export const doctorLogin = (req, res) => {
  doctorRegModel.findOne({ "dname": req.query.dname, "dpassword": req.query.dpassword }, (err, result) => {
    res.send(result);
  })
}

export const viewDoctorprofile = (req, res) => {
  doctorRegModel.findOne({ "dname": req.query.dname }, (err, result) => {
    res.send(result);
  })
}

export const addDoctor = (req, res) => {
  doctorRegModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
export const forgotPassword = (req, res) => {
  doctorRegModel.find({"demailid":req.query.demailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
      const subject = 'Credentials Recived';
      const body = `dname: ${results.dname}<br>dpassword: ${results.dpassword}<br>Please Login Using these Credentials<br>Thank You.`;
      sendEmail(req.query.demailid, subject, body);
      })
      res.send(result);
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
export const searchDoctors = (req, res) => {
  doctorRegModel.find({ "dspecilization": req.query.dspecilization},(err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
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

export const viewHospital = (req, res) => {
  hospitalRegModel.find((err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}

export const viewAppoinment = (req, res) => {
  appoinmentRegModel.find({ "dname": req.query.dname},(err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}
export const addMedicien = (req, res) => {
  medicienModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
export const searchMedecienes = (req, res) => {
  medicienModel.find({ "Problem": req.query.Problem }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
export const viewMedecienes = (req, res) => {
  medicienModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
export const addRemedies = (req, res) => {
  remediesModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
export const searchRemedies = (req, res) => {
  remediesModel.find({ "Problem": req.query.Problem}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
export const viewRemedies = (req, res) => {
  remediesModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}