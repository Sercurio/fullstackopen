import { useEffect } from 'react'
import React from 'react'
import Notification from './components/Notification'
import { Switch, Route /*, useRouteMatch, useHistory*/ } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import { useDispatch } from 'react-redux'
import BlogList from './components/BlogList'
import UserStats from './components/UserStats'
import { initializeBlogs } from './reducers/blogReducer'
import { verifyUserToken } from './reducers/userReducer'
import User from './components/User'
import BlogDetails from './components/BlogDetails'
import Menu from './components/Menu'
import { Container } from 'semantic-ui-react'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [])

  useEffect(async () => {
    const localStorageUser = JSON.parse(localStorage.getItem('user'))
    if (localStorageUser) {
      dispatch(verifyUserToken(localStorageUser.token))
    }
  }, [])

  // const history = useHistory()
  // const match = useRouteMatch('/users/:id')

  return (
    <Container textAlign='center'>
      <Menu />
      <h2>blogs</h2>
      <Notification />
      <LoginForm />
      <Switch>
        <Route path='/users/:id'>
          <User />
        </Route>
        <Route path='/blogs/:id'>
          <BlogDetails />
        </Route>
        <Route path='/users'>
          <UserStats />
        </Route>
        <Route path='/'>
          <BlogList />
        </Route>
      </Switch>
    </Container>
  )
}

export default App
