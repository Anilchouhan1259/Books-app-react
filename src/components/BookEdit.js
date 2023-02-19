import React from "react";
import { useState } from "react";
const BookEdit = ({ book, onSubmit }) => {
  const [updatedTitle, setUpdatedTitle] = useState(book.title);
  const handleChange = (event) => {
    setUpdatedTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, updatedTitle);
  };
  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <input className="input" value={updatedTitle} onChange={handleChange} />
        <button className="button is-primary">save</button>
      </form>
    </div>
  );
};

export default BookEdit;
