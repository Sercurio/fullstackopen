import axios from 'axios'

const apiUrl = 'https://restcountries.eu/rest/v2/name'

const getOne = async name => {
  try {
    const response = await axios.get(`${apiUrl}/${name}`)
    return response.data[0]
  } catch (error) {
    if (error.response.status === 404) return null
    else throw error
  }
}

export default { getOne }
