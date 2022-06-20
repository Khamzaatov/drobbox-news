const  News  = require('../models/News.model')  
module.exports.newsControllers = {
 newsPost : (req, res) => {
    News.create({
      title: req.body.title,
      text : req.body.text,
      category : req.body.category
    })
    .then((data) => {
        res.json(data)
    })
 },
 newsDelete : (req, res) => {
    News.findByIdAndRemove(req.params.id)
    .then(() => {
        res.json('Новость удалена')
    })
 },
 newsPatch : async (req, res) => {
    try {
        const data = await News.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            text : req.body.text,
            category : req.body.category })
            res.json(data)
        
    } catch (error) {
        res.json(error)
    }
 },
 newsGetId: (req, res) => {
    News.findById(req.params.id)
    .then((data) => {
        res.json(data)
    })
 },
 newsAllGet : (req, res) => {
    News.find({}, (err, data) => {
        if (!err) {
            res.json(data)
        }
    })
 },
 newsGetCat : (req, res) => {
    News.find({category : req.body.category})
        .then((data) => {
            res.json(data)
        })
 }

}

  
 




// - добавление новости
// - удаление новости
// - изменени новости
// - вывод определенной новости 
// - вывод всех новостей
// - вывод всех новостей из определенной категории