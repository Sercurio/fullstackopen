import React from 'react';

import { Icon } from 'semantic-ui-react';
import { HospitalEntry } from '../types';

const HospitalEntryComponent = ({ entry }: { entry: HospitalEntry }) => {
  return (
    <p>
      {entry.date} <Icon name='hospital' />
      <i>{entry.description}</i>
    </p>
  );
};

export default HospitalEntryComponent;
