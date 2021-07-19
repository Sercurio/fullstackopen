import React from 'react';

import axios from 'axios';
import { Icon } from 'semantic-ui-react';

import { useStateValue } from '../state';
import { apiBaseUrl } from '../constants';
import { Patient } from '../types';
import { useParams } from 'react-router-dom';
import { setPatient } from '../state/reducer';

const PatientPage = () => {
  const { id } = useParams<{ id: string }>();
  const [{ patient }, dispatch] = useStateValue();
  React.useEffect(() => {
    const fetchPatientInformation = async () => {
      try {
        const { data: patientFromApi } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch(setPatient(patientFromApi));
      } catch (e) {
        console.error(e);
      }
    };
    if (!patient || patient.id !== id) void fetchPatientInformation();
  }, [dispatch]);

  const renderSex = (patient: Patient) => {
    if (patient.gender === 'male') return <Icon name='male' />;
    else return <Icon name='female' />;
  };

  return (
    <div>
      {patient ? (
        <div>
          <h2>
            {patient.name} {renderSex(patient)}
          </h2>
          <br />
          ssn: {patient.ssn}
          <br />
          occupation: {patient.occupation}
        </div>
      ) : null}
    </div>
  );
};
export default PatientPage;
