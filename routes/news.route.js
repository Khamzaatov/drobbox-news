const { Router } = require('express');

const router = Router()

const { newsControllers } = require('../controllers/news.controller')


router.post('/news', newsControllers.newsPost)
router.delete('/news/:id', newsControllers.newsDelete)
router.patch('/news/:id', newsControllers.newsPatch)
router.get('/news', newsControllers.newsAllGet)
router.get('/news/:id', newsControllers.newsGetId)
router.get('/newsCat', newsControllers.newsGetCat);









module.exports = router 