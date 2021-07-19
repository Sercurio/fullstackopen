import React from 'react';

import axios from 'axios';
import { Button, Icon } from 'semantic-ui-react';

import { useStateValue } from '../state';
import { apiBaseUrl } from '../constants';
import { Patient, Diagnosis } from '../types';
import { useParams } from 'react-router-dom';
import { setPatient, setDiagnosisList, updatePatient } from '../state/reducer';

import AddEntryModal from '../AddEntryModal';

import EntryDetails from './EntryDetails';
import { HealthCheckEntryFormValues } from '../AddEntryModal/AddEntryHealthCheckForm';

const EntryPage = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>();

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  const submitNewEntry = async (values: HealthCheckEntryFormValues) => {
    try {
      if (patient) {
        const { data: newEntry } = await axios.post<Patient>(
          `${apiBaseUrl}/patients/${patient.id}/entries`,
          values
        );
        const updatedPatient = {
          ...newEntry,
        };
        dispatch(updatePatient(updatedPatient));
      }
      closeModal();
    } catch (e) {
      console.error(e.response?.data || 'Unknown Error');
      setError(e.response?.data?.error || 'Unknown error');
    }
  };

  const { id } = useParams<{ id: string }>();
  const [{ patient, diagnoses }, dispatch] = useStateValue();
  React.useEffect(() => {
    const fetchPatientInformation = async () => {
      try {
        const { data: patientFromApi } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch(setPatient(patientFromApi));

        const { data: diagnosisListFromApi } = await axios.get<Diagnosis[]>(
          `${apiBaseUrl}/diagnoses`
        );
        dispatch(setDiagnosisList(diagnosisListFromApi));
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

  if (!patient) return null;

  return (
    <div>
      <h2>
        {patient.name} {renderSex(patient)}
      </h2>
      <br />
      ssn: {patient.ssn}
      <br />
      occupation: {patient.occupation}
      <h3>entries:</h3>
      {patient.entries.map(entry => (
        <EntryDetails
          key={entry.id}
          entry={entry}
          diagnoses={Object.values(diagnoses)}
        />
      ))}
      <AddEntryModal
        modalOpen={modalOpen}
        onSubmit={submitNewEntry}
        error={error}
        onClose={closeModal}
      />
      <Button onClick={() => openModal()}>Add New Entry</Button>
    </div>
  );
};
export default EntryPage;
