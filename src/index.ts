import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT
const app = express()

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.static('static'))
app.use((req, res: any, next) => {
  res._render = res.render
  res.render = (page: string, locals: any = {}) => {
    locals.page = page
    res._render('layout', locals)
  }

  next()
})

app.get('/', (_, res) => {
  res.render('index')
})

app.get('/*', (req, res) => {
  res.render('404', {url: req.originalUrl})
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
