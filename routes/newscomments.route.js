const { Router } = require('express');

const router = Router()
const { newsCommentsControllers } = require('../controllers/newscomments.controller')

router.get('/comment/:id', newsCommentsControllers.commentGetNews);
router.post('/comment/:id', newsCommentsControllers.commentPost)
router.delete('/comment/:id', newsCommentsControllers.commentDelete)




module.exports = router