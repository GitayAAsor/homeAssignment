import React from "react";
import PropTypes from "prop-types";

const Author = ({ author }) => {
  Author.propTypes = {
    author: PropTypes.object,
  };
  return (
    <div key={author.lastName} className="item">
      <div key={author.firstName}>firstName: {author.firstName}</div>
      <div key={author.lastName}>isbn: {author.lastName}</div>
      <div key={author._id}>id: {author._id}</div>
    </div>
  );
};
export default Author;
