const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')
const token = require('./middleware/token')
const blogRouter = require('./controllers/blogs')
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const logger = require('./utils/logger')
const config = require('./utils/config')
const errors = require('./middleware/errors')

app.use(cors())
app.use(express.json())
app.use(token.tokenExtractor)
app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)
app.use(errors.unknownEndpoint)
app.use(errors.errorHandler)

module.exports = app
