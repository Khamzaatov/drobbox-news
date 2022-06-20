const mongoose = require('mongoose');

const newsCommentsSchema = mongoose.Schema({
    commentatorName : String,
    commentText : String,
    newsId: {type: mongoose.Schema.Types.ObjectId, ref: 'News'}
})

const Comment = mongoose.model('Comment', newsCommentsSchema)


module.exports = Comment