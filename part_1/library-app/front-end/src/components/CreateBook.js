import axios from "axios"

import { useState } from "react"
//title , author, pages, publisher, published_at
const NewBook =()=>{
const [title , setTitle ] =useState
const [ author, setAuthor] =useState
const [ pages, setPages] =useState
const [  publisher, setPublisher] =useState
const [ published_at, setPublished_at] =useState
const [ error, setError] =useState

const saveBook =() => {
const newBook = {
    title,
author,
pages,
publisher,
published_at
}
axios.post("http://localhost:5000/books",NewBook )
.then((result)=>{
console.log(result)
})
.catch((err)=>{
console.log(err)
setError(err)
})
}
//Add a frontend route `/library/create_book` to render the inputs that correspond to the book's attributes and a `submit` button (without functionality).
//title , author, pages, publisher, published_at
return(
    <>
<input type="text"
placeholder="title"

onChange={(e)=>
setTitle(e.target.value)
}
></input>




<input type="text"
placeholder="author"

onChange={(e)=>
setAuthor(e.target.value)
}
></input>

<br/>

<input type="text"
placeholder="pages"

onChange={(e)=>
setPages(e.target.value)
}
></input>

<br/>

<input type="text"
placeholder="publisher"

onChange={(e)=>
setPublisher(e.target.value)
}
></input>

<br/>

<input type="text"
placeholder="Published at ? "

onChange={(e)=>
setPublished_at(e.target.value)
}
></input>

<br/>

<button onClick={saveBook}>

    add book
</button>

<div>{error}</div>
</>
)

}//newbook