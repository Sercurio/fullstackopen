const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const token = require('../middleware/token')

blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', {
    id: 1,
    username: 1,
    name: 1,
  })
  response.json(blogs)
})

blogRouter.post('/', token.userExtractor, async (request, response) => {
  const body = request.body
  const token = request.headers['token']
  const userHeader = request.headers['user']

  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)

  if (body.title && body.url) {
    const users = await User.find({})

    const blog = new Blog({
      ...body,
      likes: body.likes || 0,
      user: user._id,
    })

    user.blogs = user.blogs.concat(blog)
    await user.save()
    const result = await blog.save()

    response.status(201).json(result)
  } else {
    response.status(400).send('author or url missing')
  }
})

blogRouter.delete('/:id', token.userExtractor, async (request, response) => {
  const token = request.headers['token']
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)
  const blog = await Blog.findById(request.params.id)

  if (!blog) response.status(204).end

  if (user._id.toString() === blog.user.toString()) {
    await Blog.findByIdAndRemove(blog._id)
    response.status(204).end
  } else {
    response
      .status(401)
      .json({ error: "you can't delete this blog post, you don't own it" })
  }
})

blogRouter.put('/:id', async (request, response) => {
  const body = request.body

  console.log(body)

  const blog = {
    likes: body.likes,
  }

  await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
  response.status(204).end
})

module.exports = blogRouter
