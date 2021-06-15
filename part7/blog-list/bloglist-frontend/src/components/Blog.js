import React /*, { useRef } */ from 'react'
//import { useDispatch, useSelector } from 'react-redux'
// import Togglable from './Togglable'
//import { addLikeBlog, removeBlog } from '../reducers/blogReducer'
import { Link } from 'react-router-dom'

const Blog = ({ blog }) => {
  //const dispatch = useDispatch()
  //const user = useSelector(state => state.user)
  //const blogRef = useRef()

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  // const handleLikeClick = () => {
  //   dispatch(addLikeBlog(blog))
  // }

  // const handleRemoveClick = () => {
  //   if (window.confirm(`Remove blog ${blog.title}`))
  //     dispatch(removeBlog(user, blog))
  //   //by ${user.username}
  // }

  // const renderDeleteButton = () => {
  //   if (user.id === blog.user.id)
  //     return (
  //       <button className='deleteButton' onClick={handleRemoveClick}>
  //         remove
  //       </button>
  //     )
  // }

  return (
    <div className='blog' style={blogStyle}>
      <Link to={`blogs/${blog.id}`}>{blog.title}</Link>
      {/* <Togglable buttonLabel='view' cancelLabel='hide' ref={blogRef}> */}
      {/* {blog.author}
      <br />
      likes {blog.likes}{' '}
      <button onClick={handleLikeClick} className='likeButton'>
        like
      </button>
      <br />
      {blog.url}
      <br />
      {user ? renderDeleteButton() : null} */}
      {/* </Togglable> */}
    </div>
  )
}

export default Blog
