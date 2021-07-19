import { NewPatient, Gender } from './types';

type Fields = {
  name: unknown;
  dateOfBirth: unknown;
  ssn: unknown;
  gender: unknown;
  occupation: unknown;
};

export const toNewPatient = ({
  name,
  dateOfBirth,
  ssn,
  gender,
  occupation,
}: Fields): NewPatient => {
  const newPatient = {
    name: parseName(name),
    dateOfBirth: parseDateOfBirth(dateOfBirth),
    ssn: parseSsn(ssn),
    gender: parseGender(gender),
    occupation: parseOccupation(occupation),
    entries: [],
  };

  return newPatient;
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) throw Error('Incorrect or missing name');

  return name;
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
  if (!dateOfBirth || !isString(dateOfBirth))
    throw Error('Incorrect or missing DateOfBirth');

  return dateOfBirth;
};

const parseSsn = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) throw Error('Incorrect or missing ssn');

  return ssn;
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation))
    throw Error('Incorrect or missing occupation');

  return occupation;
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};
