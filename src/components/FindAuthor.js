import React, { useState } from "react";
import PropTypes from "prop-types";

const FindAuthor = ({ findAuthor }) => {
  FindAuthor.propTypes = {
    findAuthor: PropTypes.func.isRequired,
  };

  const [author, setAuthor] = useState({
    authorId: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    findAuthor(author.authorId);
  };

  const onChange = (e) => {
    setAuthor({ ...author, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="authorId"
          placeholder="Author Id..."
          value={author.authorId}
          onChange={onChange}
        />
        <input type="submit" value="Find" className="btn" />
      </form>
    </div>
  );
};

export default FindAuthor;
