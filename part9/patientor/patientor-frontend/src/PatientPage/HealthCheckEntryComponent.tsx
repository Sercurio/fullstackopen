import React from 'react';

import { Icon } from 'semantic-ui-react';
import { HealthCheckEntry, HealthCheckRating } from '../types';

const renderHealthCheckRating = (healthCheckRating: HealthCheckRating) => {
  switch (healthCheckRating) {
    case 0:
      return <Icon name='heart' color='green' />;
    case 1:
      return <Icon name='heart' color='yellow' />;
    case 2:
      return <Icon name='heart' color='orange' />;
    case 3:
      return <Icon name='heart' color='red' />;
  }
};

const HealthCheckEntryComponent = ({ entry }: { entry: HealthCheckEntry }) => {
  return (
    <p>
      {entry.date} <Icon name='doctor' />
      <i>{entry.description}</i>
      {renderHealthCheckRating(entry.healthCheckRating)}
    </p>
  );
};

export default HealthCheckEntryComponent;
