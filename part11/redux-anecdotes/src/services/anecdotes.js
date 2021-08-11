import axios from 'axios'

const PORT = process.env.PORT || 3001
const baseUrl = `http://localhost:${PORT}/anecdotes`

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async content => {
  const anecdoteObject = { content: content, votes: 0 }
  const response = await axios.post(baseUrl, anecdoteObject)
  return response.data
}

const voteAnecdote = async anecdote => {
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
  return response.data
}

const anecdotesService = { getAll, createNew, voteAnecdote }
export default anecdotesService
