import React, { useState } from 'react'

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (e) => {
    const usernameValue = e.target.value
    setUsername(usernameValue)
  }
  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value
    setPassword(passwordValue)
  }

  const login = (e) => {
    e.preventDefault()
    const userObject = {
      username: username,
      password: password,
    }
    handleLogin(userObject)
    setUsername('')
    setPassword('')
  }

  return (
    <form onSubmit={login}>
      <label>Username</label>
      <input
        id="usernameInput"
        onChange={handleUsernameChange}
        value={username}
      />
      <br />
      <label>Password</label>
      <input
        id="passwordInput"
        onChange={handlePasswordChange}
        value={password}
      />
      <br />
      <button id="loginButton" type="submit">
        Login
      </button>
    </form>
  )
}

export default LoginForm
