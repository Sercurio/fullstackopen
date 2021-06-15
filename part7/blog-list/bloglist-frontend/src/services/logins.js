import axios from 'axios'
const baseUrl = '/api/login'

const login = async (username, password) => {
  const data = { username: username, password: password }
  try {
    const response = await axios.post(baseUrl, data)
    return response.data
  } catch (error) {
    return { error: error }
  }
}

const verifyToken = async token => {
  try {
    const response = await axios.post(baseUrl, null, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    return response
  } catch (error) {
    return { error }
  }
}

const loginService = { login, verifyToken }
export default loginService
