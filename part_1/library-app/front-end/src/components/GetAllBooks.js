import axios from "axios"

import { useState } from "react"

const getAllBooks = () => {
    const [ books, setBooks] =useState
const [ error, setError] =useState

    axios.get("route").then((result) =>
    {
setBooks = (result)
    }
    )
    return
    (
        <>
               same as before we just add some divs to display each book seperatly
               we access result data book (title and author) and we rended only these as per asked by question
        </>
    )
}