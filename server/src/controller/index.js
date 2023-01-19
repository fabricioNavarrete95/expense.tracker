const Category = require('../models/category')
const Transaction = require('../models/transaction')

const COLORS = {
  Gasto: '#ff6384',
  Inversion: '#36a2eb',
  Ahorros: '#f9c74f',
}

async function addCategory(req, res) {
  try {
    const { type, color } = req.body
    const newCategory = await Category.create({
      type,
      color,
    })
    res.json(newCategory)
  } catch (err) {
    if (err.message.includes('duplicate key error')) {
      return res.status(409).json({
        success: false,
        error: `Tipo de la categoría duplicado`,
      })
    }
    res.status(500).json(err)
  }
}

async function getCategories(_req, res) {
  try {
    const data = await Category.find()
    const filteredData = data.map((v) =>
      Object.assign({}, { type: v.type, color: v.color })
    )
    res.json(filteredData)
  } catch (err) {
    res.status(500).json(err)
  }
}

async function createTransaction(req, res) {
  try {
    if (!req.body)
      return res.status(400).json('No se ha enviado datos para la transacción')
    const { name, type, amount } = req.body
    const newTransaction = await Transaction({
      name,
      type,
      amount,
      color: COLORS[type],
      date: new Date(),
    })
    newTransaction.save((err) => {
      if (err)
        return res
          .status(400)
          .json({ message: `Error creando la transacción: ${err}` })
      return res.json(newTransaction)
    })
  } catch (err) {
    res.status(500).json(err)
  }
}

async function getTransactions(_req, res) {
  try {
    const data = await Transaction.find()
    res.json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

async function deleteTransaction(req, res) {
  try {
    const { id } = req.params
    if (!id)
      return res.status(400).json({ message: 'No ha enviado un _id válido' })
    await Transaction.deleteOne({ _id: id })
    res.send('Transaction deleted')
  } catch (err) {
    if (err.name === 'CastError')
      return res.status(400).json({ message: 'No ha enviado un _id válido' })
    res.status(500).send(err.name)
  }
}

async function getLabels(req, res) {
  Transaction.aggregate([
    {
      $lookup: {
        from: 'categories',
        localField: 'type',
        foreignField: 'type',
        as: 'categories_info',
      },
    },
    {
      $unwind: '$categories_info',
    },
  ])
    .then((result) => {
      const data = result.map((v) =>
        Object.assign(
          {},
          {
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.categories_info['color'],
          }
        )
      )
      res.json(data)
    })
    .catch((err) => {
      res.status(500).send(`Error de búsqueda de colección: ${err}`)
    })
}

module.exports = {
  getLabels,
  addCategory,
  getCategories,
  createTransaction,
  getTransactions,
  deleteTransaction,
}
