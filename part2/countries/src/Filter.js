const Filter = ({ countries, setCountriesToShow }) => {
  const handleOnChangeEvent = (e) => {
    const newFilter = e.target.value
    setCountriesToShow(
      countries.filter((country) => {
        return country.name.toLowerCase().startsWith(newFilter.toLowerCase())
      }),
    )
  }

  return (
    <div>
      find countries
      <input onChange={handleOnChangeEvent} />
    </div>
  )
}

export default Filter
