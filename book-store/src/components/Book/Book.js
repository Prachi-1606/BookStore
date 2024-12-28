// import React from 'react'
// import "./Book.css"
// import { Button } from '@mui/material';
// import Link from '@mui/material';
// const Book = (props) => {
//   const { _id, name, author, description, price, image}=props.book;
//   return (
//     <div className='card'>
//       <img src={image} alt={name}/>
//       <h4>{_id}</h4>
//       <article>By {author}</article>
//       <h3>{name}</h3>
//       <p>{description}</p>
//       <h2>Rs. {price}</h2>
//      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt:'auto'}}>Update</Button>
//      <Button sx={{mt:'auto'}}>Delete</Button>
//     </div>
//   )
// }

// export default Book
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`${window.location.origin}/books/${_id}`) ////http://localhost:5000
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Book;

