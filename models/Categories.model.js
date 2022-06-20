const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
  nameCat : String
})

const Categoryes = mongoose.model('Categoryes', CategorySchema)


module.exports = Categoryes
