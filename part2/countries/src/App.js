import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './Countries'
import Filter from './Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data)
      setCountriesToShow(response.data)
    })
  }, [])

  return (
    <div>
      <Filter countries={countries} setCountriesToShow={setCountriesToShow} />
      <Countries
        countries={countriesToShow}
        setCountriesToShow={setCountriesToShow}
      />
    </div>
  )
}

export default App
