import React, { useRef } from 'react'
import Togglable from './Togglable'
import PropTypes from 'prop-types'

const Blog = ({ user, blog, handleAddLike, handleRemoveBlog }) => {
  const blogRef = useRef()

  Blog.propTypes = {
    user: PropTypes.any.isRequired,
    blog: PropTypes.any.isRequired,
    handleAddLike: PropTypes.func.isRequired,
    handleRemoveBlog: PropTypes.func.isRequired,
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  const handleLikeClick = () => {
    handleAddLike(blog)
  }

  const handleRemoveClick = () => {
    if (window.confirm(`Remove blog ${blog.title} by ${user.username}`))
      handleRemoveBlog(blog)
  }

  const renderDeleteButton = () => {
    if (user.id === blog.user.id)
      return (
        <button className="deleteButton" onClick={handleRemoveClick}>
          remove
        </button>
      )
  }

  return (
    <div className="blog" style={blogStyle}>
      {blog.title}
      <Togglable buttonLabel="view" cancelLabel="hide" ref={blogRef}>
        {blog.author}
        <br />
        likes {blog.likes}{' '}
        <button onClick={handleLikeClick} className="likeButton">
          like
        </button>
        <br />
        {blog.url}
        <br />
        {user ? renderDeleteButton() : null}
      </Togglable>
    </div>
  )
}

export default Blog
