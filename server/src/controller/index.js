const Category = require('../models/category')

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

module.exports = {
  addCategory,
  getCategories,
}
