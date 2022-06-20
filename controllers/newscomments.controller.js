const Comment = require('../models/Newscomments.model')

module.exports.newsCommentsControllers = {
 commentPost : (req, res) => {
   Comment.create({
    commentatorName : req.body.commentatorName,
    commentText: req.body.commentText,
    newsId : req.body.newsId
    })
   .then(() => {
        res.json('Комментарий добавлен')
    })
 },
 commentGetNews : (req, res) => {
    Comment.find({newsId : req.params.id})
    .then((data) => {
        res.json(data)
    })
 },
 commentDelete : async (req, res) => {
    await Comment.findByIdAndRemove(req.params.id)
    .then(() => {
        res.json('Комментарий удалён')
    })
 }
}   




// - добавление комментария к определенной новости
// - удалени комментария
// - вывод всех комментариев определенной новости