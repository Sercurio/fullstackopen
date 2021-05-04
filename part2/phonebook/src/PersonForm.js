import { useState } from 'react'

const PersonForm = ({ persons, setPersons, serviceHandler }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }

    if (
      persons.some(
        (person) => person.name.toLowerCase() === newName.toLowerCase(),
      )
    ) {
      if (
        window.confirm(
          `${newName} already exist in the phonebook. Replace the old number with a new one?`,
        )
      ) {
        const person = persons.find(
          (person) => person.name.toLowerCase() === newName.toLowerCase(),
        )
        serviceHandler.onUpdatedPersonHandler(person.id, personObject)
      }
    } else {
      serviceHandler.onAddedPersonHandler(personObject)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNewNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

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
  )
}

export default PersonForm
