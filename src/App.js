import React from 'react';
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books , setBooks]= useState([]);
  const createBook = (title) =>{
    const updatedBook = [
      ...books , {id : Math.round(Math.random()*9999),title }
    ]
    setBooks(updatedBook);
  }
  const deleteById = (id) =>{
   const updatedBooks = books.filter((book)=>{
    
    return book.id !== id ;
    
   });
   setBooks(updatedBooks);
  }
  const editBook = (id,newTitle) =>{
      const updatedBook = books.map((book) => {
        if(book.id == id){
          return {...book , title : newTitle}
        }
        return book ;
        });
        setBooks(updatedBook);
     }
  return (
    <div>
      <BookCreate onCreate = {createBook}/>
      <BookList books = {books} onDelete = {deleteById} editBook ={editBook}/>
    </div>
  )
}

export default App;

