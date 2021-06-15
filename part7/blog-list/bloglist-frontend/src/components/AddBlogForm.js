import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog } from '../reducers/blogReducer'
import Togglable from './Togglable'

const AddBlogForm = () => {
  const dispatch = useDispatch()
  const addBlogFormRef = useRef()
  const user = useSelector(state => state.user)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleTitleChange = e => {
    const titleValue = e.target.value
    setTitle(titleValue)
  }
  const handleAuthorChange = e => {
    const authorValue = e.target.value
    setAuthor(authorValue)
  }
  const handleUrlChange = e => {
    const urlValue = e.target.value
    setUrl(urlValue)
  }

  const handleAddBlog = e => {
    e.preventDefault()
    const blogObject = {
      title: title,
      author: author,
      url: url,
    }
    setTitle('')
    setAuthor('')
    setUrl('')

    addBlogFormRef.current.toggleVisibility()
    dispatch(addBlog(user, blogObject))
  }

  return (
    <div>
      {user ? (
        <div>
          <Togglable
            buttonLabel='create blog'
            cancelLabel='cancel'
            ref={addBlogFormRef}
          >
            <form onSubmit={handleAddBlog} className='form'>
              <label>title</label>
              <input
                id='title'
                value={title}
                onChange={handleTitleChange}
                className='titleInput'
              />
              <br />
              <label>author</label>
              <input
                id='author'
                value={author}
                onChange={handleAuthorChange}
                className='authorInput'
              />
              <br />
              <label>url</label>
              <input
                id='url'
                value={url}
                onChange={handleUrlChange}
                className='urlInput'
              />
              <br />
              <button id='create' type='submit'>
                create
              </button>
            </form>
          </Togglable>
        </div>
      ) : null}
    </div>
  )
}

export default AddBlogForm
