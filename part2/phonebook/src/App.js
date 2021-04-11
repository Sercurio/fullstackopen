import React, { useState } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
// import Filter from "./Filter";

/*
I tried to refractor the Filter inside a component, but got async problems. The persons list was updated 
with one keystroke lag.
I can't handle it correctly except inside the App component
*/

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  // const [personsToShow, setPersonsToShow] = useState(persons);

  const [filterValue, setFilterValue] = useState("");

  const handleFilterOnNameChange = (e) => {
    setFilterValue(e.target.value);
  };

  const personsToShow =
    filterValue === ""
      ? persons
      : persons.filter(
          (person) =>
            person.name.toLowerCase().startsWith(filterValue.toLowerCase()) ===
            true
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input onChange={handleFilterOnNameChange} />
      </div>
      {/* <Filter persons={persons} setPersonsToShow={setPersonsToShow} /> */}
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
