import diagnosesData from '../data/diagnoses';
import { Diagnose } from '../types';

const diagnoses: Array<Diagnose> = diagnosesData;

const getDiagnoses = (): Array<Diagnose> => {
  console.log(diagnoses);
  return diagnoses;
};

const addDiagnose = () => {
  return null;
};

export default { getDiagnoses, addDiagnose };
