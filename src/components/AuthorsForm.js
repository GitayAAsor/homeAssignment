import React, { useState } from "react";
import PropTypes from "prop-types";

const BooksForm = ({ saveAuthor }) => {
  BooksForm.propTypes = {
    saveAuthor: PropTypes.func.isRequired,
  };

  const [author, setAuthor] = useState({
    firstName: "",
    lastName: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    saveAuthor(author);
  };

  const onChange = (e) => {
    setAuthor({ ...author, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Author First Name..."
          value={author.firstName}
          onChange={onChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Author Last Name..."
          value={author.lastName}
          onChange={onChange}
        />
        <input type="submit" value="Save" className="btn" />
      </form>
    </div>
  );
};

export default BooksForm;
