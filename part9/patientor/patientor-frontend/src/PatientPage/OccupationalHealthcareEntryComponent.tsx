import React from 'react';

import { Icon } from 'semantic-ui-react';
import { OccupationalHealthcareEntry } from '../types';

const OccupationalHealthcareEntryComponent = ({
  entry,
}: {
  entry: OccupationalHealthcareEntry;
}) => {
  return (
    <p>
      {entry.date} <Icon name='calendar outline' /> {entry.employerName}
      <br />
      <i>{entry.description}</i>
    </p>
  );
};

export default OccupationalHealthcareEntryComponent;
