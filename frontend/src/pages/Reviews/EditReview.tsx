import React, { useEffect, useState } from "react";
import { getReview, updateReview, getBooks } from "../../api/services";
import { useNavigate, useParams } from "react-router-dom";

const EditReview: React.FC = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    book_id: "",
    reviewer: "",
    rating: "",
    comment: "",
  });
  const [books, setBooks] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
    loadBooks();
  }, []);

  const loadData = async () => {
    const data = await getReview(Number(id));
    setForm(data);
  };

  const loadBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateReview(Number(id), form);
    navigate("/reviews");
  };

  return (
    <div>
      <h1>Edit Review</h1>
      <form onSubmit={handleSubmit}>
        <select
          value={form.book_id}
          onChange={(e) => setForm({ ...form, book_id: e.target.value })}
        >
          <option value="">Select Book</option>
          {books.map((b) => (
            <option key={b.id} value={b.id}>
              {b.title}
            </option>
          ))}
        </select>
        <input
          placeholder="Reviewer Name"
          value={form.reviewer}
          onChange={(e) =>
            setForm({ ...form, reviewer: e.target.value })
          }
        />
        <input
          placeholder="Rating"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
        />
        <textarea
          placeholder="Comment"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditReview;
