import React, { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Filter from "./Filter";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsToShow, setPersonsToShow] = useState([]);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
      setPersonsToShow(initialPersons);
    });
  }, []);

  const serviceHandler = {
    onDeletedPersonHandler: (person) => {
      if (window.confirm(`Are you sure you want to remove ${person.name}?`))
        personService.deletePerson(person.id).then((data) => {
          setPersons(persons.filter((p) => p.id !== person.id));
        });
    },
    onAddedPersonHandler: (person) => {
      personService.create(person).then((data) => {
        setPersons(persons.concat(data));
      });
    },
    onUpdatedPersonHandler: (id, person) => {
      personService.update(id, person).then((data) => {
        const newPersons = persons.map((p) => {
          if (p.id === id) {
            const updatedPerson = {
              ...p,
              number: person.number,
            };

            return updatedPerson;
          }

          return p;
        });
        setPersons(newPersons);
      });
    },
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        persons={persons}
        setPersonsToShow={setPersonsToShow}
        setPersons={setPersons}
      />
      <h2>Add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        serviceHandler={serviceHandler}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} serviceHandler={serviceHandler} />
    </div>
  );
};

export default App;
