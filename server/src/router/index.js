const { Router } = require('express')
const controller = require('../controller')

const router = Router()

router
  .route('/api/categories')
  .get(controller.getCategories)
  .post(controller.addCategory)

module.exports = router
