const Koa = require('koa')

const app = new Koa()

const special = require('./routes/special')
const articles = require('./routes/articles')
const users = require('./routes/users')

app.use(special.routes())
app.use(articles.routes())
app.use(users.routes())

let port = process.env.PORT || 10888;

app.listen(port)
console.log('API is ready', port)
