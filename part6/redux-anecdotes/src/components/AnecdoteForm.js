import React from 'react'
//import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
  //const dispatch = useDispatch()

  const createAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.content.value
    e.target.content.value = ''
    //dispatch(addAnecdote(content))
    props.addAnecdote(content)
    //dispatch(setNotification(`you created ${content} anecdote`, 1))
    props.setNotification(`you created ${content} anecdote`, 5)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div>
          content <input name="content" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = { addAnecdote, setNotification }

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm
