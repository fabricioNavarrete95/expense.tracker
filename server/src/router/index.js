const { Router } = require('express')
const controller = require('../controller')

const router = Router()

router.route('/api/categories').get(controller.addCategorie)

module.exports = router
