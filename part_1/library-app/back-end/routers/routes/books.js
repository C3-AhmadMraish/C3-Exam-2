const express = require("express")

const {createNewBook,getAllbooks,getBookById,deleteBookById} = require ("../controlers/books")



const bookRouter = express.Router()

bookRouter.post("/books", createNewBook)
bookRouter.get("/books",getAllbooks)
bookRouter.get("/books/:book_id",getBookById)
bookRouter.delete("/books/:book_id",deleteBookById)



//---------------------
module.exports = bookRouter