import Person from './Person'

const Persons = ({ persons, serviceHandler }) => {
  return (
    <ul>
      {persons.map((person) => (
        <div key={person.name}>
          <Person person={person} />
          <button onClick={() => serviceHandler.onDeletedPersonHandler(person)}>
            Delete
          </button>
        </div>
      ))}
    </ul>
  )
}

export default Persons
