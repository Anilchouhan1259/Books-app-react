import React from 'react';
import { useState } from 'react';

const BookCreate = ({onCreate}) => {
  const [title, setTitle] = useState('');
  const handleChange = (event) => {
      setTitle(event.target.value);
  }
  const onSubmit = (event) =>{
   event.preventDefault();
   onCreate(title);
   setTitle('');
  }
  
  return (
    <div className='book-create'>
      <h3>Add Book</h3>
      <form onSubmit={onSubmit}>
       <label>Enter Book Title</label>
       <input className = 'input' value={title} onChange ={handleChange}/>
       <button className='button'>Submit</button>
      </form>
    </div>
  )
}

export default BookCreate;
