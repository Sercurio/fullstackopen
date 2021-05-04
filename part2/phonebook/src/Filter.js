const Filter = ({ persons, setPersonsToShow }) => {
  const handleFilterOnNameChange = (e) => {
    const newFilter = e.target.value
    setPersonsToShow(
      newFilter === ''
        ? persons
        : persons.filter(
            (person) =>
              person.name.toLowerCase().startsWith(newFilter.toLowerCase()) ===
              true,
          ),
    )
  }

  return (
    <div>
      filter shown with: <input onChange={handleFilterOnNameChange} />
    </div>
  )
}

export default Filter
