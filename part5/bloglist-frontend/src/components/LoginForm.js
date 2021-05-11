const LoginForm = ({
  handleLogin,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  const handleUsernameChange = (e) => {
    const usernameValue = e.target.value
    setUsername(usernameValue)
  }
  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value
    setPassword(passwordValue)
  }

  return (
    <form onSubmit={handleLogin}>
      <label>Username</label>
      <input
        key="usernameInput"
        onChange={handleUsernameChange}
        value={username}
      />
      <br />
      <label>Password</label>
      <input
        key="passwordInput"
        onChange={handlePasswordChange}
        value={password}
      />
      <br />
      <button key="loginButton" type="submit">
        Login
      </button>
    </form>
  )
}

export default LoginForm
