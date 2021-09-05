const bookModel = require("../../models/bookModel")

const createNewBook =(req,res)=>{
    // title , author, pages, publisher, published_at
    const {title , author, pages, publisher, published_at} =req.body

    const newBook = new BookModel ({
        title ,
         author,
          pages,
           publisher,
            published_at 
    })
    newBook
    .save()
    .then((book)=>{
        res.status(200).json({
            added:true,
            book:book
        })

        
    })  .catch((error)=>{
        res.status(500).json({
            added:false,
            error:error
        })
            })
    
  
}
//-----------------------------------------------------------------

//Create an API `/books` to get all the books from the database.

const getAllbooks = (req,res) => {
    bookModel
    .find({book})
    .then((book)=>{
        res.status(200)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//-----------------------------------------------------------------

//Create an API `/books/:book_id` to get a specific book from the database.
const getBookById = (req,res) =>{
    let _id = req.query._id
    bookModel
    .findById(_id)
    .then((result) =>{
        if(!result){
            res.status(404).json({
                sucess:false,
               msg: "Book not found"})
        }
        res.status(200).json({
            bookd:result,
            sucess:false
        })
    })
}
//----------------------------------------------------------------------------------
//Create an API `/books/:book_id` to delete a specific book from the database

const deleteBookById = (req,res)=>{
    let _id = rq.query._id
    bookModel
    .findByIdAndDelete(_id)
    .then((result) =>{
        if(!result){
            res.status(404).json({
                sucess:false,
               msg: "Book not found"})
        }
        res.status(200).json({
            bookd:result,
            sucess:false, 
            msg:"book deleted"       
        })
}
}
//---------------------------------------------------
module.exports(createNewBook,getAllbooks,getBookById,deleteBookById)