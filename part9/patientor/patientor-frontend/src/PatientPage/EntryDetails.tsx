import React from 'react';

import OccupationalHealthcareEntryComponent from './OccupationalHealthcareEntryComponent';
import HospitalEntryComponent from './HospitalEntryComponent';
import HealthCheckEntryComponent from './HealthCheckEntryComponent';

import { Diagnosis, Entry } from '../types';

import { assertNever } from '../utils';

const EntryDetails = ({
  entry,
}: // diagnoses,
{
  entry: Entry;
  diagnoses: Diagnosis[];
}) => {
  switch (entry.type) {
    case 'HealthCheck':
      return <HealthCheckEntryComponent entry={entry} />;
    case 'Hospital':
      return <HospitalEntryComponent entry={entry} />;
    case 'OccupationalHealthcare':
      return <OccupationalHealthcareEntryComponent entry={entry} />;
    default:
      return assertNever(entry);
  }
};

export default EntryDetails;
