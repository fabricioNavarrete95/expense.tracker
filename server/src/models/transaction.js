const { Schema, model } = require('mongoose')

const transactionSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre de la transacción es requerido'],
    },
    type: {
      type: String,
      default: 'expense',
    },
    color: {
      type: String,
      default: '#FCBE44',
    },
    amount: {
      type: Number,
      required: [true, 'El monto de la transacción es requerido'],
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  }
)

module.exports = model('Transaction', transactionSchema)
