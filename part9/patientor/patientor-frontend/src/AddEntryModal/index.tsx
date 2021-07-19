import React from 'react';
import { Modal, Segment } from 'semantic-ui-react';
import AddEntryForm, {
  HealthCheckEntryFormValues,
} from './AddEntryHealthCheckForm';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: HealthCheckEntryFormValues) => void;
  error?: string;
}

// const [entryType, setEntryType] = useState('');

// const onClickHandlerEntryType = (e: MouseEvent<HTMLButtonElement>) => {
//   setEntryType(e.currentTarget.value);
// };

/*
const renderForm = () => {
  switch (entryType) {
    case '':
      return null;
    case 'HealthCare':
      return <AddEntryHealthCare />;
    case 'Hospital':
      return <AddEntryHospital />;
    case 'HealthCare':
      return <AddEntryOccupationalHealthcare />;
    default:
      assertNever(entryType);
  }
};
*/
const AddEntryModal = ({ modalOpen, onClose, onSubmit, error }: Props) => (
  <Modal open={modalOpen} onClose={onClose} centered={false} closeIcon>
    {/* <Button value='HealthCare' onClick={onClickHandlerEntryType} />
    <Button value='Hospital' onClick={onClickHandlerEntryType} />
    <Button value='OccupationalHealthcare' onClick={onClickHandlerEntryType} /> */}

    <Modal.Header>Add a new entry</Modal.Header>

    <Modal.Content>
      {error && <Segment inverted color='red'>{`Error: ${error}`}</Segment>}
      {/* {renderForm()} */}
      <AddEntryForm onSubmit={onSubmit} onCancel={onClose} />
    </Modal.Content>
  </Modal>
);

export default AddEntryModal;
