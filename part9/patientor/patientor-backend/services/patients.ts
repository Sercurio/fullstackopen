import patientsData from '../data/patients';
import { NonSensitivePatient, Patient } from '../types';

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

export const addPatient = () => {
  return [];
};

export default { getPatients, addPatient, getNonSensitivePatients };
