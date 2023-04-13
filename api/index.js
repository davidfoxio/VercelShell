import Prismic from 'prismic-javascript'
const express = require('express')
const app = express()
const sendgrid = require('@sendgrid/mail')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())

app.post('/sendmail', function (req, res, next) {
  res.send({
    success: true
  })
})

function initApi(req) {
  return Prismic.getApi('https://hownow.cdn.prismic.io/api/v2', {
    req: req
  })
}

app.post('/login', async function (req, res, next) {
  try {
    const { username, password } = req.body
    const api = await initApi()
    const settings = await api.getSingle('settings')

    // const cookies = req.cookies
    // console.log('cookies', cookies)

    /* eslint-disable camelcase */
    const {
      login_username,
      login_password
    } = settings.data

    if (username.trim() === login_username.trim() && password.trim() === login_password.trim()) {
      res.cookie('authenticated', true)
      res.send({
        success: true
      })
    } else {
      res.send({
        success: false
      })
    }
    /* eslint-enable camelcase */
  } catch (e) {
    res.send({
      success: false
    })
  }
})

module.exports = {
  path: '/api/',
  handler: app
}
