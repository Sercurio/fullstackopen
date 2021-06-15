import { useRouteMatch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import userService from '../services/users'
import { useSelector } from 'react-redux'
import { List } from 'semantic-ui-react'

const User = () => {
  const [users, setUsers] = useState([])
  const user = useSelector(state => state.user)

  useEffect(async () => {
    const users = await userService.getAll()
    setUsers(users)
  }, [])

  const match = useRouteMatch('/users/:id')

  const userMatched = match
    ? users.find(user => {
        return user.id === match.params.id
      })
    : null

  return (
    <div>
      {user && userMatched && userMatched.blogs.length > 0 ? (
        <div>
          <h3>added blogs</h3>
          <ul>
            {userMatched.blogs.map(blog => (
              <List key={blog.id}>{blog.title}</List>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default User
