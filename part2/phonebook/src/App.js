import React, { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import axios from "axios";
import Filter from "./Filter";

/*
I tried to refractor the Filter inside a component, but got async problems. The persons list was updated 
with one keystroke lag.
I can't handle it correctly except inside the App component
*/

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsToShow, setPersonsToShow] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      setPersonsToShow(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        persons={persons}
        setPersonsToShow={setPersonsToShow}
        setPersons={setPersons}
      />
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
