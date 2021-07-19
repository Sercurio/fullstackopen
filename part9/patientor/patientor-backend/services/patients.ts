import patientsData from '../data/patients';
import { NonSensitivePatient, Patient, NewPatient } from '../types';
import { v4 as uuidv4 } from 'uuid';

const patients: Array<Patient> = patientsData;

export const getPatients = (): Array<Patient> => {
  return patients;
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
    ({ id, name, dateOfBirth, gender, occupation }) => {
      if (id === idParam) return { id, name, dateOfBirth, gender, occupation };
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
};
