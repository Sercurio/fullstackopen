const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({ static: './build' })

server.get('/health', (req, res) => {
  res.send('ok')
})

server.use(middlewares)
server.use(router)

const PORT = process.env.PORT | 3001
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running a ${PORT}`)
})
