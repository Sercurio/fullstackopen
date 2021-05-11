import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

const addBlog = (user, blogObject) => {
  const request = axios.post(baseUrl, blogObject, {
    headers: {
      Authorization: `bearer ${user.token}`,
    },
  })
  return request.then((response) => response.data)
}

const blogService = { getAll, addBlog }
export default blogService
