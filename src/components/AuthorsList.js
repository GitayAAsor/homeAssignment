import React from "react";
import PropTypes from "prop-types";

const AuthorsList = ({ authors }) => {
  AuthorsList.propTypes = {
    authors: PropTypes.array,
  };
  return (
    <div className="scrollList">
      {authors.map((author) => (
        <div key={author.lastName} className="item">
          <div key={author.firstName}>firstName: {author.firstName}</div>
          <div key={author.lastName}>isbn: {author.lastName}</div>
          <div key={author._id}>id: {author._id}</div>
        </div>
      ))}
    </div>
  );
};
export default AuthorsList;
