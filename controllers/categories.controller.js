module.exports.categoriesControllers = {
 categoryGet : (req, res) => {
   Categoryes.find({}, (err, data) => {
     if (!err) {
      res.json(data)
     }
   })
 },
 categoryPost : (req, res) => {
   Categoryes.create({
     nameCat : req.body.nameCat})
     .then((data) => {
      res.json(data)
     })
 },
 categoryDelete : (req, res) => {
  Categoryes.findByIdAndRemove(req.params.id)
  .then(() => {
    res.json('Категория удалена')
})
 }
}




const Categoryes = require('../models/Categories.model') 