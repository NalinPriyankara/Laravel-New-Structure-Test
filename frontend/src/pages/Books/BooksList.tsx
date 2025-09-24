import React, { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../../api/services";
import { useNavigate } from "react-router-dom";

const BooksList = () => {
  const [books, setBooks] = useState<any[]>([]);
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      const res = await getBooks();
      setBooks(res.data ?? res);
    } catch (err) {
      console.error("Error fetching books", err);
    }
  };

  const handleDelete = async (id: number) => {
    await deleteBook(id);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <button onClick={() => navigate("/books/add")}>Add New Book</button>
      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Title</th>
            <th>ISBN</th>
            <th>Published</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book: any) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.author?.name}</td>
              <td>{book.title}</td>
              <td>{book.isbn}</td>
              <td>{book.published_at}</td>
              <td>
                <button onClick={() => navigate(`/books/edit/${book.id}`)}>Edit</button>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
