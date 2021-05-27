import React, { useState } from 'react'

const AddBlogForm = ({ handleAddBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleTitleChange = (e) => {
    const titleValue = e.target.value
    setTitle(titleValue)
  }
  const handleAuthorChange = (e) => {
    const authorValue = e.target.value
    setAuthor(authorValue)
  }
  const handleUrlChange = (e) => {
    const urlValue = e.target.value
    setUrl(urlValue)
  }

  const addBlog = (e) => {
    e.preventDefault()
    const blogObject = {
      title: title,
      author: author,
      url: url,
    }
    handleAddBlog(blogObject)
  }

  return (
    <form onSubmit={addBlog} className="form">
      <label>title</label>
      <input
        key="title"
        value={title}
        onChange={handleTitleChange}
        className="titleInput"
      />
      <br />
      <label>author</label>
      <input
        key="author"
        value={author}
        onChange={handleAuthorChange}
        className="authorInput"
      />
      <br />
      <label>url</label>
      <input
        key="url"
        value={url}
        onChange={handleUrlChange}
        className="urlInput"
      />
      <br />
      <button type="submit">create</button>
    </form>
  )
}

export default AddBlogForm
