import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, logoutUser } from '../reducers/userReducer'
import { Button, Label } from 'semantic-ui-react'

const LoginForm = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = e => {
    const usernameValue = e.target.value
    setUsername(usernameValue)
  }
  const handlePasswordChange = e => {
    const passwordValue = e.target.value
    setPassword(passwordValue)
  }

  const logout = () => {
    dispatch(logoutUser())
  }

  const login = e => {
    e.preventDefault()
    dispatch(loginUser(username, password))
    setUsername('')
    setPassword('')
  }

  return (
    <div>
      {user ? (
        <div>
          <h3>User {user.username} logged in</h3>
          <Button onClick={logout}>logout</Button>
        </div>
      ) : (
        <div>
          <h3>notConnected</h3>
          <form onSubmit={login}>
            <Label>Username</Label>
            <input
              id='usernameInput'
              onChange={handleUsernameChange}
              value={username}
            />
            <br />
            <Label>Password</Label>
            <input
              id='passwordInput'
              onChange={handlePasswordChange}
              value={password}
            />
            <br />
            <Button id='loginButton' type='submit'>
              Login
            </Button>
          </form>
        </div>
      )}
    </div>
  )
}

export default LoginForm
