import axios from "axios";
import { useState } from "react";

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    if (
      persons.some(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      window.alert(`${newName} already exist in the phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      axios
        .post("http://localhost:3001/persons", personObject)
        .then((response) => {
          setPersons(persons.concat(response.data));
          setNewName("");
          setNewNumber("");
        });
    }
  };

  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNewNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
