const { Schema, model } = require('mongoose')

const categorySchema = new Schema(
  {
    type: {
      type: String,
      required: [true, 'El nombre de la categoría es requerido'],
      unique: true,
    },
    color: {
      type: String,
      default: '#bcbcbc',
    },
  },
  {
    versionKey: false,
  }
)

module.exports = model('Category', categorySchema)
