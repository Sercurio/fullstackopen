const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({ static: './build' })

server.use(middlewares)
server.use(router)

server.get('/health', (req, res) => {
  res.send('ok')
})

server.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log('JSON Server is running')
})
