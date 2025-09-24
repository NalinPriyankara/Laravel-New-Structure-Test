import React, { useEffect, useState } from "react";
import { getBook, updateBook, getAuthors } from "../../api/services";
import { useParams, useNavigate } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await getBook(Number(id));
      setBook(res.data);
    };
    loadData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateBook(Number(id), book);
    navigate("/books");
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input value={book.author_id} onChange={(e) => setBook({ ...book, author_id: e.target.value })} />
        <input value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} />
        <input value={book.isbn} onChange={(e) => setBook({ ...book, isbn: e.target.value })} />
        <input type="date" value={book.published_at?.split("T")[0]} onChange={(e) => setBook({ ...book, published_at: e.target.value })} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditBook;
