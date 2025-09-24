import React, { useEffect, useState } from "react";
import { createReview, getBooks } from "../../api/services";
import { useNavigate } from "react-router-dom";

const AddReview: React.FC = () => {
  const [form, setForm] = useState({
    book_id: "",
    reviewer: "",
    rating: "",
    comment: "",
  });
  const [books, setBooks] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createReview(form);
    navigate("/reviews");
  };

  return (
    <div>
      <h1>Add Review</h1>
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddReview;
