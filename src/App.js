import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import BooksList from "./components/BooksList";
import BooksForm from "./components/BooksForm";
import AuthorsForm from "./components/AuthorsForm";
import AuthorsList from "./components/AuthorsList";
import FindBook from "./components/FindBook";
import Book from "./components/book";
import Author from "./components/Author";
import FindAuthor from "./components/FindAuthor";

const App = () => {
  App.defaultProps = {
    title: "Authors & Books",
  };

  const [states, setStates] = useState({
    books: [],
    authors: [],
    book: [],
    author: [],
  });

  useEffect(() => {
    let books = [];
    axios
      .get("api/books")
      .then((res) => {
        books = res.data;
      })
      .then(() => {
        axios.get("api/authors").then((res) => {
          setStates({
            ...states,
            books: books,
            authors: res.data,
          });
        });
      });
  }, []);

  const saveBook = (book) => {
    axios.post("api/book", book).then(() => {
      axios.get("api/books").then((res) => {
        setStates({ ...states, books: res.data });
      });
    });
  };

  const saveAuthor = (author) => {
    axios.post("api/author", author).then(() => {
      axios.get("api/author").then((res) => {
        setStates({ ...states, authors: res.data });
      });
    });
  };

  const findBook = (id) => {
    axios.get(`api/book/${id}`).then((res) => {
      setStates({ ...states, book: res.data[0] });
    });
  };

  const findAuthor = (id) => {
    axios.get(`api/author/${id}`).then((res) => {
      setStates({ ...states, author: res.data[0] });
    });
  };
  return (
    <section className="landing">
      <div className="mainPanel">
        <h1>{App.title}</h1>
        <BooksForm saveBook={saveBook} />
        <BooksList books={states.books} />
        <AuthorsForm saveAuthor={saveAuthor} />
        <AuthorsList authors={states.authors} />
        <FindBook findBook={findBook} />
        <Book book={states.book} />
        <FindAuthor findAuthor={findAuthor} />
        <Author author={states.author} />
      </div>
    </section>
  );
};

export default App;
