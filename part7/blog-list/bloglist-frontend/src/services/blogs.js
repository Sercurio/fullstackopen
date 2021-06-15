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

const addLike = async blogObject => {
  const request = axios.put(
    `${baseUrl}/${blogObject.id.toString()}`,
    blogObject
  )
  const response = await request
  return response.data
}

const addComment = async blogObject => {
  const urlComment = `${baseUrl}/${blogObject.id.toString()}/comments`
  const request = axios.put(urlComment, blogObject)
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
  return response
}

const blogService = { getAll, addBlog, addLike, deleteBlog, addComment }
export default blogService
