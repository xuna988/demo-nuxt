const {Nuxt, Builder} = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser');
const app = require('express')()
// Body parser，用来封装 req.body
app.use(bodyParser.json())

const index = require('./api/routes/index')
const deal = require('./api/routes/deal')
const theme = require('./api/routes/theme')
const news = require('./api/routes/news')
app.use(bodyParser.json())

app.use(cookieParser());

app.use(session({
	secret:'super-secret-key',
	resave:false,
	saveUninitialized:false,
	cookie:{maxAge:60000}
}))


app.use('/api', index)
app.use('/deal', deal)
app.use('/theme', theme)
app.use('/news', news)

const config = require('./nuxt.config')

config.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(config)
app.use(nuxt.render)
const isProd = process.env.NODE_ENV === 'production'

if(!isProd){
	const builder = new Builder(nuxt)
	builder.build()
}
app.use(nuxt.render)
app.listen(3000)
console.log(`Nuxt.js SSR Server listening on localhost:3000,at ${new Date().toLocaleString()}`)