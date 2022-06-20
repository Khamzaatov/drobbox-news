const express = require('express');
const app = express();
const port = 3000

const mongoose = require('mongoose')

app.use(express.json());

app.use(require('./routes/news.route'))
app.use(require('./routes/categories.route'))
app.use(require('./routes/newscomments.route'))

mongoose.connect("mongodb+srv://Khamzatov:Magham01@cluster0.zaemc.mongodb.net/dropbox-mongoose", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))  

 

app.listen(port, () => { 
    console.log('Сервер запущен!')
})           