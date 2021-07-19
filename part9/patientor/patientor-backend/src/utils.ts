import {
  NewEntry,
  Diagnosis,
  NewPatient,
  Gender,
  HealthCheckRating,
  Discharge,
  SickLeave,
} from './types';

type FieldsPatient = {
  name: unknown;
  dateOfBirth: unknown;
  ssn: unknown;
  gender: unknown;
  occupation: unknown;
};

type FieldsDiagnosis = {
  code: unknown;
  name: unknown;
  latin: unknown;
};

type FieldsEntry = {
  description: unknown;
  date: unknown;
  specialist: unknown;
  diagnosisCodes: unknown;
  healthCheckRating: unknown;
  employerName: unknown;
  sickLeave: unknown;
  discharge: unknown;
  type: unknown;
};

export const toNewPatient = ({
  name,
  dateOfBirth,
  ssn,
  gender,
  occupation,
}: FieldsPatient): NewPatient => {
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

export const toNewDiagnosis = ({
  code,
  name,
  latin,
}: FieldsDiagnosis): Diagnosis => {
  return {
    code: parseCode(code),
    name: parseName(name),
    latin: parseLatin(latin),
  };
};

export const toNewEntry = ({
  description,
  date,
  specialist,
  diagnosisCodes,
  healthCheckRating,
  employerName,
  sickLeave,
  discharge,
  type,
}: FieldsEntry): NewEntry => {
  try {
    switch (type) {
      case 'HealthCheck': {
        return {
          type: type,
          description: parseDescription(description),
          date: parseDate(date),
          specialist: parseSpecialist(specialist),
          diagnosisCodes: parseDiagnosesCodes(diagnosisCodes),
          healthCheckRating: parseHealthCheckRating(healthCheckRating),
        };
        break;
      }
      case 'Hospital': {
        return {
          type: type,
          description: parseDescription(description),
          date: parseDate(date),
          specialist: parseSpecialist(specialist),
          diagnosisCodes: parseDiagnosesCodes(diagnosisCodes),
          discharge: parseDischarge(discharge),
        };
        break;
      }
      case 'OccupationalHealthcare': {
        return {
          type: type,
          description: parseDescription(description),
          date: parseDate(date),
          specialist: parseSpecialist(specialist),
          diagnosisCodes: parseDiagnosesCodes(diagnosisCodes),
          sickLeave: parseSickLeave(sickLeave),
          employerName: parseEmployerName(employerName),
        };
      }
      default:
        throw Error('Incorrect type');
    }
  } catch (error) {
    throw error;
  }
};

const parseCode = (code: unknown): string => {
  if (!code || !isString(code)) throw Error('Incorrect or missing code');

  return code;
};

const parseDischarge = (discharge: unknown): Discharge => {
  if (!discharge || !isDischarge(discharge))
    throw Error('Incorrect or missing discharge');

  return discharge;
};

const parseLatin = (latin: unknown): string | undefined => {
  if (!isString(latin)) return undefined;
  else return latin;
};

const parseDescription = (description: unknown): string => {
  if (!description || !isString(description))
    throw Error('Incorrect or missing description');

  return description;
};

const parseEmployerName = (employerName: unknown): string => {
  if (!employerName || !isString(employerName))
    throw Error('Incorrect or missing employerName');

  return employerName;
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date)) throw Error('Incorrect or missing date');

  return date;
};

const parseSpecialist = (specialist: unknown): string => {
  if (!specialist || !isString(specialist))
    throw Error('Incorrect or missing specialist');

  return specialist;
};

const parseHealthCheckRating = (
  healthCheckRating: unknown
): HealthCheckRating => {
  if (!healthCheckRating || !isHealthCheckRating(healthCheckRating))
    throw Error('Incorrect or missing healthCheckRating');

  return healthCheckRating;
};

const parseSickLeave = (sickLeave: unknown): SickLeave | undefined => {
  if (isSickLeave(sickLeave))
    return { startDate: sickLeave.startDate, endDate: sickLeave.endDate };
  else return undefined;
};

const isSickLeave = (param: any): param is SickLeave => {
  return isString(param.startDate) && isString(param.endDate);
};

const isArray = (array: unknown): array is string[] => {
  return Array.isArray(array);
};

const parseDiagnosesCodes = (diagnosisCodes: unknown): string[] => {
  if (isArray(diagnosisCodes)) {
    if (isString(diagnosisCodes[0])) return diagnosisCodes as string[];
  }
  return [];
};
/*
const isDiagnosisCode = (param: any): param is Diagnosis => {
  // parseCode(param.code);
  // parseName(param.name);
  // parseLatin(param.latin);
  return true;
};*/

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

const isDischarge = (param: any): param is Discharge => {
  return isString(param.date) && isString(param.criteria);
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isHealthCheckRating = (param: any): param is HealthCheckRating => {
  return Object.values(HealthCheckRating).includes(param);
};

/**
 * Helper function for exhaustive type checking
 */
export const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};
