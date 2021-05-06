const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const User = require('../models/user')
const helper = require('./test_helper')
const bcrypt = require('bcrypt')

beforeEach(async () => {
  await Blog.deleteMany({})
  await User.deleteMany({})

  await Blog.insertMany(helper.initialBlogs)
  const saltRounds = 10
  const passwordHash = await bcrypt.hash('root', saltRounds)
  await User.insertMany({
    username: 'root',
    passwordHash: passwordHash,
    name: 'root',
  })
})

test('test if db contains length of initial blogs', async () => {
  const blogsAtStart = await helper.initialBlogs

  const response = await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)

  expect(response.body).toHaveLength(blogsAtStart.length)
})

test('if id is unique identifier', async () => {
  const response = await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)

  expect(response.body[0].id).toBeDefined()
})

test('if a blog can be added', async () => {
  const blogObject = {
    title: 'VIM is great',
    author: 'Vim creator',
    url: 'https://vim.org',
    likes: 10,
  }

  const loginResponse = await api.post('/api/login').send({
    username: 'root',
    password: 'root',
  })

  const response = await api
    .post('/api/blogs')
    .send(blogObject)
    .set('Authorization', `bearer ${loginResponse.body.token}`)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

  const titles = blogsAtEnd.map((n) => n.title)
  expect(titles).toContain('VIM is great')
})

test('if trying to add a blog without token then 400', async () => {
  const blogObject = {
    title: 'VIM is great',
    author: 'Vim creator',
    url: 'https://vim.org',
    likes: 10,
  }

  const response = await api
    .post('/api/blogs')
    .send(blogObject)
    .expect(401)
    .expect('Content-Type', /application\/json/)
})

test('if likes are undefined, default set to 0', async () => {
  const blogObject = {
    title: 'VIM is great',
    author: 'Vim creator',
    url: 'https://vim.org',
  }

  const loginResponse = await api.post('/api/login').send({
    username: 'root',
    password: 'root',
  })

  const response = await api
    .post('/api/blogs')
    .send(blogObject)
    .set('Authorization', `bearer ${loginResponse.body.token}`)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()

  const createdBlog = blogsAtEnd.reduce((r, blog) =>
    blog.title === 'VIM is great' ? blog : undefined,
  )

  expect(createdBlog.likes).toBe(0)
})

test('if no title or url missing, backend respond 400', async () => {
  const blogObjectNoTitle = {
    author: 'Vim creator',
    url: 'https://vim.org',
  }

  const blogObjectNoUrl = {
    title: 'VIM is great',
    author: 'Vim creator',
  }

  const loginResponse = await api.post('/api/login').send({
    username: 'root',
    password: 'root',
  })

  await api
    .post('/api/blogs')
    .set('Authorization', `bearer ${loginResponse.body.token}`)
    .send(blogObjectNoTitle)
    .expect(400)
  await api
    .post('/api/blogs')
    .set('Authorization', `bearer ${loginResponse.body.token}`)
    .send(blogObjectNoUrl)
    .expect(400)
})

afterAll(() => {
  mongoose.connection.close()
})
