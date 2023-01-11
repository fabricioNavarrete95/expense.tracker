const path = require('path')
const cors = require('cors')
const express = require('express')

const envFilePath = path.resolve(
  __dirname,
  '..',
  process.env.NODE_ENV === 'development'
    ? '.env.dev'
    : process.env.NODE_ENV === 'test'
    ? '.env.test'
    : '.env'
)

const { parsed } = require('dotenv').config({ path: envFilePath })

const app = express()

app.use(cors())
app.use(express.json())

app.set('port', parsed.PORT)

app.use(require('./router'))

module.exports = app
