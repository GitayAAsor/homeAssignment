import React, { useState } from "react";
import PropTypes from "prop-types";

const BooksForm = ({ saveBook }) => {
  BooksForm.propTypes = {
    saveBook: PropTypes.func.isRequired,
  };

  const [book, setBook] = useState({
    bookName: "",
    isbn: "",
    author: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    saveBook(book);
  };

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="bookName"
          placeholder="Book Name..."
          value={book.bookName}
          onChange={onChange}
        />
        <input
          type="text"
          name="isbn"
          placeholder="Isbn..."
          value={book.isbn}
          onChange={onChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author ID..."
          value={book.author}
          onChange={onChange}
        />
        <input type="submit" value="Save" className="btn" />
      </form>
    </div>
  );
};

export default BooksForm;
