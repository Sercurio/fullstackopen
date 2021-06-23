import { useMutation } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import { LOGIN } from '../queries'

const LoginForm = ({ setToken, errorHandler, show }) => {
  const [login, result] = useMutation(LOGIN)

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.value
      setToken(token)
      localStorage.setItem('library-user-token', token)
    }
  }, [result.data]) // eslint-disable-line

  const [username, setUsername] = useState('')
  const handleUsernameChange = e => {
    setUsername(e.target.value)
  }

  const [password, setPassword] = useState('')
  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleOnSubmit = e => {
    e.preventDefault()

    login({ variables: { username, password } })
  }

  if (!show) return null

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>username</label>
        <input value={username} onChange={handleUsernameChange} />
        <label>password</label>
        <input value={password} onChange={handlePasswordChange} />
        <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default LoginForm
