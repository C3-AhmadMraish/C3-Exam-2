const mongoose = require("mongoose")

const bookModel = new mongoose.Schema({

//title , author, pages, publisher, published_at

title: { type: String},
author: {type: String},
publisher: {type: String},
published_at:{type:Date}

})
module.exports = mongoose.model ("BooksSchema", bookModel)