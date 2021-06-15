import blogService from '../services/blogs'
import { setNotification } from './notificationReducer'

const initialState = []

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()

    dispatch({
      type: 'INITIALIZE_BLOGS',
      data: { blogs },
    })
  }
}

export const addBlog = (user, blog) => {
  return async dispatch => {
    const blogAdded = await blogService.addBlog(user, blog)
    dispatch({ type: 'ADD_BLOG', data: { blogAdded } })
    dispatch(setNotification('SUCCESS blog added', 2))
  }
}

export const addLikeBlog = blog => {
  return async dispatch => {
    const updatedBlog = await blogService.addLike(blog)

    dispatch({
      type: 'ADD_LIKE_BLOG',
      data: { updatedBlog },
    })
  }
}

export const addCommentBlog = blog => {
  return async dispatch => {
    const updatedBlog = await blogService.addComment(blog)
    dispatch({
      type: 'ADD_COMMENT_BLOG',
      data: { updatedBlog },
    })
  }
}

export const removeBlog = (user, blog) => {
  return async dispatch => {
    const response = await blogService.deleteBlog(user, blog)
    if (response.status === 204) {
      dispatch({
        type: 'REMOVE_BLOG',
        data: { blog },
      })
      dispatch(setNotification('SUCCESS when removing blog', 2))
    }
  }
}

const reducer = (state = initialState, action) => {
  if (action.type === 'INITIALIZE_BLOGS') {
    return action.data.blogs
  } else if (action.type === 'ADD_LIKE_BLOG') {
    const blogToChange = state.find(
      blog => blog.id === action.data.updatedBlog.id
    )
    const changedBlog = {
      ...blogToChange,
      likes: blogToChange.likes + 1,
    }
    return state.map(blog => (blog.id !== changedBlog.id ? blog : changedBlog))
  } else if (action.type === 'ADD_BLOG') {
    return state.concat(action.data.blogAdded)
  } else if (action.type === 'REMOVE_BLOG') {
    const blogToRemove = state.find(blog => blog.id === action.data.blog.id)
    const leftBlogs = state.filter(blog => blog.id !== blogToRemove.id)
    return leftBlogs
  } else if (action.type === 'ADD_COMMENT_BLOG') {
    const blogToChange = state.find(
      blog => blog.id === action.data.updatedBlog.id
    )
    const changedBlog = {
      ...blogToChange,
      comments: action.data.updatedBlog.comments,
    }
    return state.map(blog => (blog.id !== changedBlog.id ? blog : changedBlog))
  }
  return state
}

export default reducer
