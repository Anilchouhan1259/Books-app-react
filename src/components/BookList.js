import React from 'react';
import BookShow from './BookShow';

const BookList = ({books , onDelete , editBook}) => {
  const rendredBook  = books.map((book)=>{
    return <BookShow key ={book.id} book = {book} onDelete = {onDelete} editBook = {editBook}/>
  });
  return (
     <div className='book-list'>
      {rendredBook}
    </div>
  )
}

export default BookList;
