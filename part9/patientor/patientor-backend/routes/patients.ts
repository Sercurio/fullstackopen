import express from 'express';
import patientService from '../services/patients';

const router = express.Router();

router.get('/', (_req, res) => {
  //console.log(patientService.getNonSensitivePatients());
  res.send(patientService.getNonSensitivePatients());
});

export default router;
