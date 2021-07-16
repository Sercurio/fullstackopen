import express from 'express';
import patientService from '../services/patients';
import { toNewPatient } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getNonSensitivePatients());
});

router.post('/', (_req, res) => {
  const newPatient = toNewPatient(_req.body);

  const addedPatient = patientService.addPatient(newPatient);

  res.send(addedPatient);
});

export default router;
