import React, { useState } from 'react'
import BookEdit from './BookEdit';

const BookShow = ({book , onDelete ,editBook}) => {
  const [edit , setEdit] = useState(false);
  const handleDeleteBook = () => {
    onDelete(book.id);
  }
  const handleEditBook = () => {
    setEdit(!edit);
  }
  const handleSubmit = (id,newTitle) =>{
    setEdit(false);
    editBook(id,newTitle);
  }
  let content = <h3>{book.title}</h3>;
  if(edit){
    content = <BookEdit book = {book} onSubmit = {handleSubmit}/>
  }
  return (
    <div className='book-show'>
      <img alt='images' src = {`https://picsum.photos/seed/${book.title}/300/200`}/>
      <div>{content}</div>
      <div className='actions'>
      <button className='edit' onClick = {handleEditBook}>
        edit
      </button>
      <button className='delete'
      onClick={handleDeleteBook}>delete</button>
      </div>
    </div>
  )
}

export default BookShow ;
