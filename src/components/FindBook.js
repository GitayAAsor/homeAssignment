import React, { useState } from "react";
import PropTypes from "prop-types";

const FindBook = ({ findBook }) => {
  FindBook.propTypes = {
    findBook: PropTypes.func.isRequired,
  };

  const [book, setBook] = useState({
    bookId: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    findBook(book.bookId);
  };

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="bookId"
          placeholder="Book Id..."
          value={book.bookId}
          onChange={onChange}
        />
        <input type="submit" value="Find" className="btn" />
      </form>
    </div>
  );
};

export default FindBook;
