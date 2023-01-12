const app = require('./app')

const port = app.get('port') || 5000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
