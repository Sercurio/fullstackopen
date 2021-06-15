import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './Blog'
import AddBlogForm from './AddBlogForm'
import { Grid } from 'semantic-ui-react'

const BlogList = () => {
  const blogs = useSelector(state => {
    return state.blogs.sort((a, b) => {
      return b.likes - a.likes
    })
  })

  const user = useSelector(state => state.user)

  return (
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column></Grid.Column>
        <Grid.Column>
          {user ? (
            <div>
              {blogs.map(blog => (
                <Blog key={blog.id} blog={blog} user={user} />
              ))}
              <AddBlogForm />
            </div>
          ) : null}
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default BlogList
