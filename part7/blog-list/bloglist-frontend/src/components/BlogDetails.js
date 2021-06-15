import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import {
  addLikeBlog,
  removeBlog,
  addCommentBlog,
} from '../reducers/blogReducer'
import { List } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const BlogDetails = () => {
  const dispatch = useDispatch()

  const [commentValue, setCommentValue] = useState('')

  const blogs = useSelector(state => state.blogs)

  const user = useSelector(state => state.user)

  const match = useRouteMatch('/blogs/:id')

  const blog = match ? blogs.find(blog => blog.id === match.params.id) : null

  const handleLikeClick = () => {
    dispatch(addLikeBlog(blog))
  }

  const handleAddComment = e => {
    e.preventDefault()
    dispatch(
      addCommentBlog({
        ...blog,
        comments: blog.comments
          ? blog.comments.concat(commentValue)
          : [commentValue],
      })
    )
    setCommentValue('')
  }

  const handleRemoveClick = () => {
    if (window.confirm(`Remove blog ${blog.title}`))
      dispatch(removeBlog(user, blog))
    //by ${user.username}
  }

  const renderDeleteButton = () => {
    if (user.id === blog.user.id)
      return (
        <Button className='deleteButton' onClick={handleRemoveClick}>
          remove
        </Button>
      )
  }

  const handleOnCommentChange = e => {
    setCommentValue(e.target.value)
  }

  return (
    <div>
      {user && blog ? (
        <div>
          <h2>{blog.title}</h2>
          added by {blog.author}
          <br />
          likes {blog.likes}{' '}
          <Button onClick={handleLikeClick} className='likeButton'>
            like
          </Button>
          <br />
          <a href={blog.url}>{blog.url}</a>
          <br />
          {user ? renderDeleteButton() : null}
          <br />
          <h3>comments</h3>
          {blog.comments ? (
            <ul>
              {blog.comments.map(comment => (
                <List key={comment}>{comment}</List>
              ))}
            </ul>
          ) : null}
          <form onSubmit={handleAddComment}>
            <input
              id='commentInput'
              onChange={handleOnCommentChange}
              value={commentValue}
            />
            <Button type='submit'>add comment</Button>
          </form>
        </div>
      ) : null}
    </div>
  )
}

export default BlogDetails
