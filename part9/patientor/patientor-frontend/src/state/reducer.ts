import { State } from './state';
import { Patient, Diagnosis } from '../types';

export const setPatient = (patient: Patient): Action => {
  return {
    type: 'SET_PATIENT',
    payload: patient,
  };
};

export const addPatient = (patient: Patient): Action => {
  return {
    type: 'ADD_PATIENT',
    payload: patient,
  };
};

export const setPatientList = (patients: Patient[]): Action => {
  return {
    type: 'SET_PATIENT_LIST',
    payload: patients,
  };
};

export const updatePatient = (patient: Patient): Action => {
  return {
    type: 'UPDATE_PATIENT',
    payload: patient,
  };
};

export const setDiagnosisList = (diagnoses: Diagnosis[]): Action => {
  return { type: 'SET_DIAGNOSES_LIST', payload: diagnoses };
};

export type Action =
  | {
      type: 'SET_PATIENT_LIST';
      payload: Patient[];
    }
  | {
      type: 'ADD_PATIENT';
      payload: Patient;
    }
  | { type: 'SET_PATIENT'; payload: Patient }
  | { type: 'SET_DIAGNOSES_LIST'; payload: Diagnosis[] }
  | { type: 'UPDATE_PATIENT'; payload: Patient };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_PATIENT_LIST':
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients,
        },
      };
    case 'ADD_PATIENT':
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload,
        },
      };
    case 'SET_PATIENT':
      return {
        ...state,
        patient: action.payload,
      };
    case 'SET_DIAGNOSES_LIST':
      return {
        ...state,
        diagnoses: {
          ...action.payload.reduce(
            (memo, diagnoses) => ({ ...memo, [diagnoses.code]: diagnoses }),
            {}
          ),
          ...state.diagnoses,
        },
      };
    case 'UPDATE_PATIENT':
      return {
        ...state,
        patient: action.payload,
      };
    default:
      return state;
  }
};
