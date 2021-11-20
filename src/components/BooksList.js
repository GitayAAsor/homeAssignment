import React from "react";
import PropTypes from "prop-types";
import lodash from "lodash";

const BooksList = ({ books }) => {
  BooksList.propTypes = {
    books: PropTypes.array,
  };
  if (lodash.isEmpty(books)) {
    return <div>no books</div>;
  } else {
    return (
      <div className="scrollList">
        {books.map((book) => (
          <div key={book.bookName} className="item">
            <div key={book.bookName}>bookName: {book.bookName}</div>
            <div key={book.isbn}>isbn: {book.isbn}</div>
            <div key={book.author}>author: {book.author}</div>
            <div key={book._id}>id: {book._id}</div>
          </div>
        ))}
      </div>
    );
  }
};
export default BooksList;
