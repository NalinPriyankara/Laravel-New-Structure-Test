import React, { useState } from "react";
import { createAuthor } from "../../api/services";
import { useNavigate } from "react-router-dom";

const AddAuthor: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", bio: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createAuthor(form);
    navigate("/authors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Author</h2>
      <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <textarea placeholder="Bio" value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })}></textarea>
      <button type="submit">Save</button>
    </form>
  );
};

export default AddAuthor;
