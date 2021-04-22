import React, { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Filter from "./Filter";
import Notification from "./Notification";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsToShow, setPersonsToShow] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
      setPersonsToShow(initialPersons);
    });
  }, []);

  const serviceHandler = {
    onDeletedPersonHandler: (person) => {
      if (window.confirm(`Are you sure you want to remove ${person.name}?`))
        personService
          .deletePerson(person.id)
          .then((data) => {
            setPersons(persons.filter((p) => p.id !== person.id));
            setNotificationMessage(`SUCCESS ${person.name} deleted !`);
            setTimeout(() => {
              setNotificationMessage(null);
            }, 5000);
          })
          .catch((error) => {
            console.log(error);
          });
    },
    onAddedPersonHandler: (person) => {
      personService
        .create(person)
        .then((data) => {
          setPersons(persons.concat(data));
          setNotificationMessage(`SUCCESS ${person.name} added !`);
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onUpdatedPersonHandler: (id, person) => {
      personService
        .update(id, person)
        .then((data) => {
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
          setNotificationMessage(`SUCCESS ${person.name} updated !`);
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setNotificationMessage(
            `ERROR when updating ${person.name}, the person was removed from the server`
          );
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
          personService.getAll().then((initialPersons) => {
            setPersons(initialPersons);
            setPersonsToShow(initialPersons);
          });
        });
    },
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
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
