import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import userService from '../services/users'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

const UserStats = () => {
  useEffect(async () => {
    const users = await userService.getAll()
    setUsers(users)
  }, [])

  const user = useSelector(state => state.user)

  const [users, setUsers] = useState([])

  return (
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column></Grid.Column>
        <Grid.Column>
          {user ? (
            <Table celled>
              <thead>
                <tr>
                  <th></th>
                  <th>blogs created</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0
                  ? users.map(user => {
                      return (
                        <tr key={user.id}>
                          <td>
                            <Link to={`/users/${user.id}`}>
                              {user.username}
                            </Link>
                          </td>
                          <td>{user.blogs.length}</td>
                        </tr>
                      )
                    })
                  : null}
              </tbody>
            </Table>
          ) : null}
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default UserStats
