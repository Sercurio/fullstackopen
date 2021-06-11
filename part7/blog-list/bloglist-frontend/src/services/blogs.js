import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

const addBlog = async (user, blogObject) => {
  const request = axios.post(baseUrl, blogObject, {
    headers: {
      Authorization: `bearer ${user.token}`,
    },
  })
  const response = await request
  return response.data
}

const addLike = async (user, blogObject) => {
  const request = axios.put(
    `${baseUrl}/${blogObject.id.toString()}`,
    blogObject,
  )
  const response = await request
  return response.data
}

const deleteBlog = async (user, blogObject) => {
  const request = axios.delete(`${baseUrl}/${blogObject.id.toString()}`, {
    data: blogObject,
    headers: {
      Authorization: `bearer ${user.token}`,
    },
  })
  const response = await request
  return response.data
}

const blogService = { getAll, addBlog, addLike, deleteBlog }
export default blogService
