import { useRef } from 'react'
import Togglable from './Togglable'
const Blog = ({ user, blog, handleAddLike, handleRemoveBlog }) => {
  const blogRef = useRef()

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  const handleLikeClick = (e) => {
    handleAddLike(blog)
  }

  const handleRemoveClick = (e) => {
    if (window.confirm(`Remove blog ${blog.title} by ${user.username}`))
      handleRemoveBlog(blog)
  }

  const renderDeleteButton = () => {
    if (user.id === blog.user.id)
      return <button onClick={handleRemoveClick}>remove</button>
  }

  return (
    <div style={blogStyle}>
      {blog.title}
      <Togglable buttonLabel="view" cancelLabel="hide" ref={blogRef}>
        {blog.author}
        <br />
        likes {blog.likes} <button onClick={handleLikeClick}>like</button>
        <br />
        {blog.url}
        <br />
        {renderDeleteButton()}
      </Togglable>
    </div>
  )
}

export default Blog
