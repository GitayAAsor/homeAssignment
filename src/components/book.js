import React from "react";
import PropTypes from "prop-types";

const Book = ({ book }) => {
  Book.propTypes = {
    book: PropTypes.object,
  };

  return (
    <div key={book.bookName} className="item">
      <div key={book.bookName}>bookName: {book.bookName}</div>
      <div key={book.isbn}>isbn: {book.isbn}</div>
      <div key={book.author}>author: {book.author}</div>
      <div key={book._id}>id: {book._id}</div>
    </div>
  );
};

export default Book;
