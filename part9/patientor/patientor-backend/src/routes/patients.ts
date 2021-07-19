import express from 'express';
import patientService from '../services/patients';
import { toNewPatient, toNewEntry } from '../utils';

const router = express.Router();

router.post('/:id/entries', (_req, res) => {
  try {
    const patientId = _req.params.id;

    const newEntry = toNewEntry(_req.body);

    const addedEntry = patientService.addEntry(patientId, newEntry);

    if (addedEntry) res.send(addedEntry);

    console.log(addedEntry);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

router.get('/:id', (_req, res) => {
  res.send(patientService.getNonSensitivePatientById(_req.params.id));
});

router.get('/', (_req, res) => {
  res.send(patientService.getNonSensitivePatients());
});

router.post('/', (_req, res) => {
  const newPatient = toNewPatient(_req.body);

  const addedPatient = patientService.addPatient(newPatient);

  res.send(addedPatient);
});

export default router;
