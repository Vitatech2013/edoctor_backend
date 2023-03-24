import adminLoginModel from './adminLoginModel';
import doctorRegModel from '../Common/doctorRegModel';
import hospitalRegModel from '../Common/hospitalRegModel';
import patientRegModel from '../Common/patientRegModel';
import appoinmentRegModel from '../Common/appoinmentRegModel';
import {sendEmail} from '../Common/email';

export const adminLogin = (req, res) => {
    adminLoginModel.findOne({ "username": req.query.username, "password": req.query.password }, (err, result) => {
        res.send(result);
    })
}
export const updatePassword = (req, res) => {
    adminLoginModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(updatedObj);
      }
    })
  }
  export const forgotPassword = (req, res) => {
    adminLoginModel.find({"emailid":req.query.emailid}, (err, result) => {
      if (err) {
        res.send(err);
      }
       else {
        result.map(results => {
        const subject = 'Credentials Recived';
        const body = `UserName: ${results.username}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
        sendEmail(req.query.emailid, subject, body);
        })
        res.send(result);
      }
    })
  }
  export const admincreate = (req, res) => {

    adminLoginModel.create(req.body, (err, result) => {
      if (err) {
        res.send(err);
      }
      else {
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
    appoinmentRegModel.find((err, list) => {
        if (!err) {
            res.send(list);
        } else {
            res.send(err);
        }
    })
}

export const updateDoctor = (req, res) => {
    doctorRegModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}

export const updatePatient = (req, res) => {
    patientRegModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}

export const updateHospital = (req, res) => {
    hospitalRegModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}

export const updateAppoinment = (req, res) => {
    appoinmentRegModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
        if (err) {
            res.send(err);
        } else {
            res.send(updatedObj);
        }
    })
}

export const deletedoctor = (req, res) =>
    doctorRegModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(deletedObj);
        }
    });

export const deletehospital = (req, res) =>
    hospitalRegModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(deletedObj);
        }
    });

export const deletepatient = (req, res) =>
    patientRegModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(deletedObj);
        }
    });

export const deleteappoinment = (req, res) =>
    appoinmentRegModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(deletedObj);
        }
    });