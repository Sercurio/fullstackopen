import axios from 'axios'
const baseUrl = '/api/login'

const login = async (username, password) => {
  const data = { username: username, password: password }
  try {
    const response = await axios.post(baseUrl, data)
    return { token: response.data.token }
  } catch (error) {
    return { error: error }
  }
}

const loginService = { login }
export default loginService
