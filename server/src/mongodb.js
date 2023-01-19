const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
const conn = mongoose
  .connect(process.env.MONGO_URI)
  .then((db) => db)
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })

module.exports = conn
