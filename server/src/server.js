const app = require('./app')
const mongoDB = require('./mongodb')

const port = app.get('port') || 5000

mongoDB
  .then((db) => {
    console.log(
      `>>> MongoDB connected: ${db.connection.host}/${db.connection.name}`
    )
    app.listen(port, () => {
      console.log(`>>> Server running on port ${port}`)
    })

    app.on('error', (err) => {
      console.error(`Error Server: ${err}`)
      process.exit(1)
    })
  })
  .catch((err) => {
    console.error(`Error: ${err}`)
    process.exit(1)
  })
