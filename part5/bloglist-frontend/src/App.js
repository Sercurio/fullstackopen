import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import AddBlogForm from './components/AddBlogForm'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/logins'

const App = () => {
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [blogs, setBlogs] = useState([])

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs))
  }, [])

  useEffect(() => {
    const localStorageUser = localStorage.getItem('user')
    if (localStorageUser) setUser(localStorageUser)
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    const response = await loginService.login(username, password)
    if (response.token) {
      setUser({ username: username, password: password, token: response.token })
      setNotificationMessage('SUCCESS login')
      setTimeout(() => setNotificationMessage(null), 2000)
    } else {
      setUser(null)
      setNotificationMessage('ERROR login')
      setTimeout(() => setNotificationMessage(null), 2000)
    }
    setUsername('')
    setPassword('')
    localStorage.setItem('user', { user: user })
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    setNotificationMessage('SUCCESS logout')
    setTimeout(() => setNotificationMessage(null), 2000)
  }

  const handleAddBlog = (e) => {
    e.preventDefault()
    const blogObject = {
      title: title,
      author: author,
      url: url,
    }
    blogService
      .addBlog(user, blogObject)
      .then((data) => {
        setBlogs(blogs.concat(data))
        setNotificationMessage('SUCCESS blog added')
        setTimeout(() => setNotificationMessage(null), 2000)
      })
      .catch((error) => {
        setNotificationMessage('ERROR when adding blog')
        setTimeout(() => setNotificationMessage(null), 2000)
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
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
          <AddBlogForm
            title={title}
            setTitle={setTitle}
            author={author}
            setAuthor={setAuthor}
            url={url}
            setUrl={setUrl}
            handleAddBlog={handleAddBlog}
          />
        </div>
      ) : (
        <LoginForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      )}
    </div>
  )
}

export default App
