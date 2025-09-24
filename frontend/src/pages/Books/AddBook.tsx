import React, { useState } from "react";
import { createBook, getAuthors } from "../../api/services";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({ author_id: "", title: "", isbn: "", published_at: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createBook(book);
    navigate("/books");
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Author ID" value={book.author_id} onChange={(e) => setBook({ ...book, author_id: e.target.value })} />
        <input placeholder="Title" value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} />
        <input placeholder="ISBN" value={book.isbn} onChange={(e) => setBook({ ...book, isbn: e.target.value })} />
        <input type="date" value={book.published_at} onChange={(e) => setBook({ ...book, published_at: e.target.value })} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddBook;
