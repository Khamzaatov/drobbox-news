const { Router } = require('express');

const router = Router()

const { categoriesControllers } = require('../controllers/categories.controller')


router.get('/categories', categoriesControllers.categoryGet)
router.post('/categories', categoriesControllers.categoryPost)
router.delete('/categories/:id', categoriesControllers.categoryDelete)




module.exports = router 