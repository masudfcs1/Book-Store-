import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const OtherBook = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setbooks(data.slice(5, 15)));
  }, []);

  return (
    <div>
      <BookCard books={books} headingine="Other Books" />
    </div>
  );
};

export default OtherBook;
