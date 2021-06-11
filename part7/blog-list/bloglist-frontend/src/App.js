import { useState, useEffect, useRef } from 'react'
import React from 'react'
import Blog from './components/Blog'
import AddBlogForm from './components/AddBlogForm'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/logins'
import Togglable from './components/Togglable'

const App = () => {
  const [user, setUser] = useState(null)

  const [blogs, setBlogs] = useState([])

  const [notificationMessage, setNotificationMessage] = useState(null)

  const loginFormRef = useRef()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(
        blogs.sort((a, b) => {
          return b.likes - a.likes
        })
      )
    )
  }, [])

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem('user'))
    if (localStorageUser) setUser(localStorageUser)
  }, [])

  const handleLogin = async userObject => {
    const response = await loginService.login(
      userObject.username,
      userObject.password
    )

    if (response.token) {
      userObject = {
        ...userObject,
        token: response.token,
        id: response.id,
      }
      setUser(userObject)
      setNotificationMessage('SUCCESS login')
      setTimeout(() => setNotificationMessage(null), 2000)
    } else {
      setUser(null)
      setNotificationMessage('ERROR login')
      setTimeout(() => setNotificationMessage(null), 2000)
    }
    localStorage.setItem('user', JSON.stringify(userObject))
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    setNotificationMessage('SUCCESS logout')
    setTimeout(() => setNotificationMessage(null), 2000)
  }

  const handleAddBlog = blogObject => {
    loginFormRef.current.toggleVisibility()
    blogService
      .addBlog(user, blogObject)
      .then(data => {
        setBlogs(blogs.concat(data))
        setNotificationMessage('SUCCESS blog added')
        setTimeout(() => setNotificationMessage(null), 2000)
      })
      .catch(() => {
        setNotificationMessage('ERROR when adding blog')
        setTimeout(() => setNotificationMessage(null), 2000)
      })
  }
  const handleAddLike = blog => {
    blogService
      .addLike(user, blog)
      .then(response => {
        const newBlogs = blogs.map(b => {
          if (b.id === response.id) {
            const updatedBlog = {
              ...b,
              likes: response.likes,
            }
            return updatedBlog
          }
          return b
        })
        setBlogs(
          newBlogs.sort((a, b) => {
            return b.likes - a.likes
          })
        )
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleRemoveBlog = blog => {
    blogService
      .deleteBlog(user, blog)
      .then(() => {
        setBlogs(blogs.filter(b => b.id !== blog.id))
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={notificationMessage} />
      {user ? (
        <div>
          <h3>User {user.username} logged in</h3>
          <button onClick={handleLogout}>logout</button>
        </div>
      ) : (
        <h3>notConnected</h3>
      )}
      {user ? (
        <div>
          <Togglable
            buttonLabel='create blog'
            cancelLabel='cancel'
            ref={loginFormRef}
          >
            <AddBlogForm handleAddBlog={handleAddBlog} />
          </Togglable>

          {blogs.map(blog => (
            <Blog
              user={user}
              key={blog.id}
              blog={blog}
              handleAddLike={handleAddLike}
              handleRemoveBlog={handleRemoveBlog}
            />
          ))}
        </div>
      ) : (
        <LoginForm handleLogin={handleLogin} />
      )}
    </div>
  )
}

export default App
