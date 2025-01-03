// import React ,{useEffect,useState} from 'react'

// import axios from 'axios'
// import Book from "./Book"
// const URL="http://localhost:5000/books";
// const fetchHandler=async()=>{
//    return await axios.get(URL).then((res)=>res.data)

// }
// const Books = () => {
//    const [books,setBooks]= useState();
//     useEffect(()=>{
//   fetchHandler().then(data=>setBooks(data.books));

//     }, []);
//     console.log(books);
//   return (
//     <div>
//      <ul>
//       {books && books.map((book,i)=>(
//         <div key={i}>
// <Book book={book}/>
//         </div>
//       ))}
//      </ul>
//     </div>
//   )
// }

//export default Book
import React, { useEffect, useState } from "react";
import "./Book.css"
import axios from "axios";
import Book from "./Book";
const URL = `${window.location.origin}/books`; //http://localhost:5000
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;

