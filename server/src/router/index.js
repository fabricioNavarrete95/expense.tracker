const { Router } = require('express')
const controller = require('../controller')

const router = Router()

router.get('/api/labels', controller.getLabels)

router
  .route('/api/categories')
  .get(controller.getCategories)
  .post(controller.addCategory)

router
  .route('/api/transactions')
  .get(controller.getTransactions)
  .post(controller.createTransaction)

router.delete('/api/transactions/:id', controller.deleteTransaction)

module.exports = router
