const User = require('../models/user')
const jwt = require('jsonwebtoken')

const tokenExtractor = (request, response, next) => {
  const authorization = request.get('Authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer '))
    request.headers['token'] = authorization.substring(7)
  else request.headers['token'] = ''
  next()
}

const userExtractor = async (request, response, next) => {
  const token = request.headers['token']
  const user = await User.findById(jwt.verify(token, process.env.SECRET).id)
  request.headers['user'] = user
  next()
}

module.exports = {
  tokenExtractor,
  userExtractor,
}
