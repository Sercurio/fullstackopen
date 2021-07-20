import patientsData from '../../data/patients';
import { NonSensitivePatient, Patient, NewPatient, NewEntry } from '../types';
import { v4 as uuidv4 } from 'uuid';

const patients: Array<Patient> = patientsData;

export const getPatients = (): Array<Patient> => {
  return patients;
};

export const addEntry = (
  patientId: string,
  entry: NewEntry
): Patient | undefined => {
  const id: string = uuidv4();

  const patientToUpdate = patients.find(patient => {
    return patient.id === patientId;
  });

  if (patientToUpdate) {
    const newEntry = {
      ...entry,
      id,
    };

    patientToUpdate.entries.push(newEntry);

    patients.map(patient => {
      return patient.id === patientToUpdate.id ? patientToUpdate : patient;
    });
    return patientToUpdate;
  } else return undefined;
};
export const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export const getNonSensitivePatientById = (
  idParam: string
): NonSensitivePatient => {
  const patient = patients.find(
    ({ id, name, dateOfBirth, gender, occupation, entries }) => {
      if (id === idParam)
        return { id, name, dateOfBirth, gender, occupation, entries };
      else return null;
    }
  );
  return patient as NonSensitivePatient;
};

export const addPatient = (entry: NewPatient): Patient => {
  const id: string = uuidv4();
  const newPatient = {
    id,
    ...entry,
  };
  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  addPatient,
  getNonSensitivePatients,
  getNonSensitivePatientById,
  addEntry,
};
